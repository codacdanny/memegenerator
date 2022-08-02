import React from "react";

import { useState, useEffect, useRef } from "react";
import FileUploadComponent from "./FileUploadComponent";

const UploadImage = () => {
  // const memeImage = useRef("");

  //   if (image && canvas) {
  //     const ctx = canvas.current.getContext("2d");
  //     ctx.fillStyle = "black";
  //     ctx.fillRect(0, 0, 400, 256 + 80); // here we will change to canvas width and height for responsiveness
  //     ctx.drawImage(image, (400 - 256) / 2, 40);

  //     ctx.font = "20px Comic Sans MS";
  //     ctx.fillStyle = "white";
  //     ctx.textAlign = "center";

  //     ctx.fillText(topText, 400 / 2, 25);
  //     ctx.fillText(bottomText, 400 / 2, 256 + 40 + 25);
  //   }
  // }, [image, canvas, topText, bottomText]);

  return (
    <div>
      <main>
        <FileUploadComponent />
      </main>
    </div>
  );
};

export default UploadImage;
