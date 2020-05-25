import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { ReactComponent as Previous } from "./svgs/previous.svg";
import { ReactComponent as Back } from "./svgs/back.svg";
import { ReactComponent as PlayIcon } from "./svgs/play.svg";

const App = () => {
  return (
    <div className='outerWrap'>
      <div className='App'>
        <Nav />
        <Main />
      </div>
      <div className='musicControls'>
        <Back />
        <PlayIcon className='play' />
        <Previous />
      </div>
    </div>
  );
};

export default App;
