import React, { useEffect, useState, useRef } from "react";
import * as bodypix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Information from "./information";
import Header from "./header";
import Video from './Video';
import Description from "./Description";


function App() {

  return (
    <div className="main-container">
    <section className="screen">
    <Header />
    </section>
    <section className="screen">
    <Description />
    </section>
    <section className="screen">
    <Video />
    </section>
    </div>
  );
}

export default App;
