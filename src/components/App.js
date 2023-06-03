import React, { useEffect, useState, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as bodypix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

function App() {
  const [showWebcam, setShowWebCam] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoWidth, setVideoWidth] = useState(480);
  const [videoHeight, setVideoHeight] = useState(320);
  const [model, setModel] = useState();
  const videoConstraints = {
    height: 480,
    width: 640,
    // facingMode: "user",
  };

  const loadBodyPix = async () => {
    try {
      const net = await bodypix.load({
        multiplier: 0.5,
      });
      console.log("model loaded");
      setInterval(() => {
        detect(net);
      }, 10);
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
      console.log(person);

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
    <div>
      <div style={{ position: "absolute", top: "400px" }}>
        <Webcam
          audio={false}
          id="img"
          ref={webcamRef}
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </div>
    <div>
    <div style={{ position: "absolute", top: "400px", zIndex: "9999" }}>
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
  );
}

export default App;
