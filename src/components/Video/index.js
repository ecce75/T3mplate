import React, { useEffect, useState, useRef } from "react";
import * as bodypix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { useInView } from "react-intersection-observer";
import { poser } from "../../helpers/poser";

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
    const videoConstraints = {
      height: 380,
      width: 420,
      facingMode: "user",
    };

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
        const personParts = person.allPoses.forEach(pose => {
            poser("latteral raise", pose)
        });
        console.log(personParts)

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

 console.log(inView)

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
        </div>
    </div>
  )
}

export default Video;