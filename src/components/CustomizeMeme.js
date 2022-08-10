import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomizeMeme = ({ image }) => {
  const canvas = useRef(null);

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80); // here we will change to canvas width and height for responsiveness
      // let element = document.getElementById("cow");
      const rawImage = new Image();
      rawImage.src = image;
      ctx.drawImage(rawImage, canvas.innerwidth - 5, canvas.innerheight - 5);
      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(topText, 400 / 2, 25);
      ctx.fillText(bottomText, 400 / 2, 256 + 40 + 25);
    }
  }, [image, canvas, topText, bottomText]);
  return (
    <div className="customizeMeme figure">
      <div>
        <input
          className="input"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          className="input"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <canvas ref={canvas} width={400} height={256 + 80} />

      <div className="centerBtn">
        <button className="btn" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      {/* <img src={image} alt="meme to fix" className="testing" hidden /> */}
    </div>
  );
};

export default CustomizeMeme;
