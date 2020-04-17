import React from "react";
import "./FaceDetect.css";

const FaceDetect = () => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src width="500px" heigh="auto" />
        <div className="bounding-box"></div>
      </div>
    </div>
  );
};

export default FaceDetect;
