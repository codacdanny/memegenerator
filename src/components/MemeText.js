import memesData from "./memesData";
import { useState } from "react";

export default function Meme() {
  //const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg") IGNORE THIS

  // THIS SECTION IS WHERE THE BUG LIES
  const { meme, setMeme } = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  //I THINK THE BUG IS FROM THIS LINE BUT I CAN'T SEEM TO FIGURE IT OUT
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  /// THERE IS NO BUG HERE, LOOK UP
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="meme-pic" />
    </main>
  );
}

// const MemeText = () => {
//   //const [memeImage, setmemeImage] = useState("https://i.imgflip.com/30b1gx.jpg");
//   //getting the meme image
//   const { meme, setMeme } = useState({
//     topText: "",
//     bottomText: "",
//     randomImage: "http://i.imgflip.com/1bij.jpg",
//   });

//   const [allMemeImages, setAllMemeImages] = useState(memesData);

//   const getMeme = () => {
//     const memesArr = allMemeImages.data.memes;
//     const randomNumber = Math.floor(Math.random() * memesArr.length);
//     const url = memesArr[randomNumber].url;

//     setMeme((prevMeme) => ({
//       ...prevMeme,
//       randomImage: url,
//     }));
//   };

//   return (
//     <main className="main">
//       <div className="form">
//         <input type="text" placeholder="Top Text" className="form-text" />
//         <input type="text" placeholder="Botttom Text" className="form-text" />
//         <button className="btn" onClick={getMeme}>
//           Get a new meme image 🖼
//         </button>
//       </div>
//       <img src={meme.randomImage} alt="meme-pic" className="meme-image" />
//     </main>
//   );
// };
// export default MemeText;
