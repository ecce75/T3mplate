import React, { useEffect, useState, useRef } from "react";
import * as bodypix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { useInView } from "react-intersection-observer";

const Video = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });
    const [showWebcam, setShowWebCam] = useState(false);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [videoWidth, setVideoWidth] = useState(480);
    const [videoHeight, setVideoHeight] = useState(320);
    const [model, setModel] = useState();
    const [correct, setCorrect] = useState('');

    const videoConstraints = {
      height: 380,
      width: 420,
      facingMode: "user",
    };

    const poser = (exercise, pose) => {
      switch (exercise) {
          case 'standing hamstring curl':
              if (pose.keypoints[10].position.y >= 30) {
                  console.log(pose.keypoints[10]);
              } else {
                  console.log("leg lifted too high");
              }
              break;
          case 'latteral raise':
              //left elbow
              if (pose.keypoints[5].position.y >= 190) {
                  setCorrect("left arm moving correctly");
              } else if (pose.keypoints[5].position.y < 190) {
                  setCorrect("left elbow is too high");
              }
              //right elbow
              if (pose.keypoints[6].position.y >= 190) {
                  setCorrect("right arm moving correctly");
              } else if (pose.keypoints[6].position.y < 190) {
                  setCorrect("right elbow is too high");
              }
              break;
          case 'side leg lift':
              console.log('side leg lift');
              break;
          default: console.log("not a valid/recognized/implemented pose");
      }
  }
    
    const loadBodyPix = async () => {
      try {
        const net = await bodypix.load({
          multiplier: 1,
        });
        console.log("model loaded");
        setInterval(() => {
          detect(net);
        }, 100);
      } catch (err) {
        console.log(err);
      }
    };

    console.log(correct)

    const detect = async (net) => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const videoHeight = video.videoHeight;
        const videoWidth = video.videoWidth;
  
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
  
        const person = await net.segmentPersonParts(video);
        person.allPoses.forEach(pose => {
            poser("latteral raise", pose)
        });

        const coloredPartImage = bodypix.toColoredPartMask(person);
        bodypix.drawMask(
          canvasRef.current,
          video,
          coloredPartImage,
          0.7,
          0,
          false
        );
      }
    };

      useEffect(() => {
    tf.ready().then(() => {
      loadBodyPix();
    });
  }, []);

  return (
    <div id="video-page" style={{ position: 'relative' }}>
        <div ref={ref} style={{ width: 100, height: 100 }}>
        <div style={{ position: 'absolute', top: "200px", left: "300px" }}>
        {
            inView ? <Webcam
            audio={false}
            id="img"
            ref={webcamRef}
            screenshotQuality={1}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          /> : null
        }
      </div>
      <div style={{ position: 'absolute', top: "200px", zIndex: "9999", left: "300px" }}>
        <canvas
          id="myCanvas"
          width={videoWidth}
          ref={canvasRef}
          height={videoHeight}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
        <div style={{ zIndex: 92340938 }}>
        {correct}
        </div>
        </div>
    </div>
  )
}

export default Video;