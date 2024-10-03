import React, { useCallback, useRef } from "react";
import { Outlet } from "react-router-dom";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Webcam from "react-webcam";

const RegisterationDeliveryProducts = () => {
  const webcamRef = useRef("");

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <div className="w-[calc(100%-40px)] max-w-2xl mx-auto">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />
      <button onClick={capture}>Capture photo</button>

      {/* <Counter/> */}
    </div>
  );
};

export default RegisterationDeliveryProducts;
