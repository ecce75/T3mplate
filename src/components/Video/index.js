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
  const [loading, setLoading] = useState(false);

  const videoConstraints = {
    height: 580,
    width: 820,
    facingMode: "user",
  };

  const poser = (exercise, pose) => {
    let correctValues = "";

    switch (exercise) {
      case 'standing hamstring curl':
        if (pose.keypoints[10].position.y >= 30) {
          correctValues += "leg lifted correctly\n";
          console.log('leg lifted correctly')
        } else {
          correctValues += "leg lifted too high\n";
          console.log(pose)
        }
        break;
      case 'latteral raise':
        // left elbow
        if (pose.keypoints[5].position.y >= 190 && pose.keypoints[5].position.y <= 240) {
          correctValues += "left arm moving correctly\n";
        } else if (pose.keypoints[5].position.y < 190) {
          correctValues += "left elbow is too low\n";
        } else if (pose.keypoints[5].position.y > 240) {
          correctValues += "left elbow is too High\n";
        }
        // right elbow
        if (pose.keypoints[6].position.y >= 190 && pose.keypoints[6].position.y <= 240) {
          correctValues += "right arm moving correctly\n";
        } else if (pose.keypoints[6].position.y < 190) {
          correctValues += "right elbow is too low\n";
        } else if (pose.keypoints[6].position.y > 240) {
          correctValues += "right elbow is too High\n";
        }
        break;
      case 'side leg lift':
        correctValues += "side leg lift\n";
        break;
      default:
        correctValues += "not a valid/recognized/implemented pose\n";
    }

    setCorrect(correctValues);
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
    <div id="video-page" style={{ position: 'relative', display: "flex", justifyContent: 'space-between' }}>
      <div ref={ref} style={{ width: 100, height: 100 }}>
        <div style={{ position: 'absolute', top: "120%", left: "100px" }}>
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
        <div style={{ position: 'absolute', top: "120%", zIndex: "9999", left: "100px" }}>
          <canvas
            id="myCanvas"
            width={videoWidth}
            ref={canvasRef}
            height={videoHeight}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
      <div style={{ position: 'absolute', top: "160%", zIndex: "99992", left: "1000px" }}>
        {correct}

        <span style={{ display: 'block', marginTop: 10, marginBottom: 10 }}>Follow this video to improve your form</span>
        <img style={{ width: 320, height: 420, objectFit: 'cover' }} src="https://media.discordapp.net/attachments/1114524817543139429/1114976052029161512/ezgif-4-deeef034cf.gif?width=341&height=606" />
      </div>
    </div>
  )
}

export default Video;