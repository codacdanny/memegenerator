import React, { useEffect, useRef, useState } from "react";

const CustomizeMeme = ({ image }) => {
  const canvas = useRef(null);
  const [memeImage, setMemeImage] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  // useEffect(() => {

  //   rawImage.onload = () => setMemeImage(rawImage);
  // }, [image]);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80); // here we will change to canvas width and height for responsiveness
      // let element = document.getElementById("cow");
      const rawImage = new Image();
      rawImage.src = image;
      ctx.drawImage(rawImage, (400 - 256) / 2, 40);
      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(topText, 400 / 2, 25);
      ctx.fillText(bottomText, 400 / 2, 256 + 40 + 25);
    }
  }, [image, canvas, topText, bottomText]);
  return (
    <div>
      <canvas ref={canvas} width={400} height={256 + 80} />

      <input
        type="text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <img src={image} alt="meme to fix" className="testing" id="cow" hidden />
    </div>
  );
};

export default CustomizeMeme;
