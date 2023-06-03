import React, { useEffect, useState, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as bodypix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

function App() {
    const [showWebcam, setShowWebCam] = useState(false)
    const webcamRef = useRef(null);
    const canvasRef = useRef(null)
    const [videoWidth, setVideoWidth] = useState(960);
    const [videoHeight, setVideoHeight] = useState(640);    
    const [model, setModel] = useState();
    const videoConstraints = {
        height: 1080,
        width: 1920,
        // facingMode: "user",
        };

const loadBodyPix = async () => {
    try {
        const net = await bodypix.load();
        console.log('model loaded')
        setInterval(() => {
            detect(net)
        }, 100)
    } catch(err) {
        console.log(err)
    }
}

const detect = async (net) => {
    if(typeof 
        webcamRef.current !== 'undefined' &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
    ) {
        const video = webcamRef.current.video;
        const videoHeight = video.videoHeight;
        const videoWidth = video.videoWidth;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        const person = await net.segmentPersonParts(video)
        console.log(person)

        const coloredPartImage = bodypix.toColoredPartMask(person);
        bodypix.drawMask(
            canvasRef.current,
            video,
            coloredPartImage,
            0.7,
            0,
            false
        )
    } 
}

useEffect(() => {
tf.ready().then(() => {
loadBodyPix()
});
}, []);

const toggleWebcam = async () => {
    if (showWebcam) {
      // Webcam is currently open, so close it
      setShowWebCam(false);
      const videoStream = webcamRef.current.srcObject;
      if (videoStream) {
        videoStream.getVideoTracks().forEach((track) => {
          track.enabled = false;
        });
      }
    } else {
      // Webcam is currently closed, so open it
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setShowWebCam(true);
        webcamRef.current.srcObject = stream;
      } catch (error) {
        console.log("Error accessing webcam:", error);
      }
    }
  };

  return (
    <div>
        
        {/* <button
style={{
color: "white",
backgroundColor: "blueviolet",
width: "50%",
maxWidth: "250px",
}}
onClick={() => {
setShowWebCam(!showWebcam)
predictionFunction();
}}
>
{showWebcam ? <>On</> : <>Off</>}
</button> */}

<button onClick={() => toggleWebcam()}>OFF</button>


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
  )
}

export default App