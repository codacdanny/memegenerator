import memesData from "./memesData";

import { useState } from "react";

const MemeText = () => {
  //const [memeImage, setmemeImage] = useState("https://i.imgflip.com/30b1gx.jpg");
  //getting the meme image
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMeme = () => {
    const memesArr = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <main className="main">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form-text" />
        <input type="text" placeholder="Botttom Text" className="form-text" />
        <button className="btn" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="meme-pic" className="meme-image" />
    </main>
  );
};

export default MemeText;
