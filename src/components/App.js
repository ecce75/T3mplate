import React from "react";
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
