import React, { Component } from "react";
import "./App.css";
import ImageSearchForm from "./components/ImageSearchForm/ImageSearchForm";
import FaceDetect from "./components/FaceDetect/FaceDetect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageSearchForm />
        <FaceDetect />
      </div>
    );
  }
}

export default App;
