import React, { useEffect, useRef, useState } from "react";
// import { saveAs } from "file-saver";
// import { Link } from "react-router-dom";

const CustomizeMeme = ({ image }) => {
  // const downloadImage = (el) => {
  //   // if (el.target.id === "download") {
  //   //   saveAs(image, "meme.jpg");
  //   // }

  //   if (finishedImage) {
  //     saveAs(finishedImage, "meme.jpg");
  //   }
  //   // saveAs(query, "image.jpg");
  //   // let image = canvas.toDataURL("image/jpg");
  //   // el.href = image;
  // };
  // let finishedImage;
  const canvas = useRef(null);

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80); // here we will change to canvas width and height for responsiveness
      // let element = document.getElementById("cow");
      const rawImage = new Image();
      rawImage.src = image;
      ctx.drawImage(rawImage, 60, 40, 280, 256);
      ctx.font = "25px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(topText, 400 / 2, 25);
      ctx.fillText(bottomText, 400 / 2, 256 + 40 + 25);
      // finishedImage = canvas.toDataURL("image/png");
    }
  }, [image, canvas, topText, bottomText]);
  return (
    <div className="customizeMeme figure">
      <div className="customizeMemeInputs">
        <input
          placeholder="top Text"
          className="input"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          placeholder="bottom Text"
          className="input"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <canvas ref={canvas} width={400} height={256 + 80} />

      {/* {finishedImage && (
        <div className="centerBtn">
          <a href={finishedImage} onClick={() => downloadImage(this)}>
            {" "}
            download Image
          </a>
        </div>
      )} */}
      {/* <img src={image} alt="meme to fix" className="testing" hidden /> */}
    </div>
  );
};

export default CustomizeMeme;
