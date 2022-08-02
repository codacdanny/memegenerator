import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MemeText = () => {
  //const [memeImage, setmemeImage] = useState("https://i.imgflip.com/30b1gx.jpg");
  //getting the meme image

  //shuffle memes

  // const [meme, setMeme] = useState({
  //   topText: "",
  //   bottomText: "",
  //   randomImage: "http://i.imgflip.com/1bij.jpg",
  // });

  // const [allMemeImages, setAllMemeImages] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const _memes = res.data.memes;
  //       shuffle(_memes);
  //       setAllMemeImages(_memes);
  //     });
  // }, []);
  // const getMeme = () => {
  //   const randomNumber = Math.floor(Math.random() * allMemeImages.length);
  //   const url = allMemeImages[randomNumber].url;

  //   setMeme((prevMeme) => ({
  //     ...prevMeme,
  //     randomImage: url,
  //   }));
  // };

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setMeme((prevMeme) => ({
  //     ...prevMeme,
  //     [name]: value,
  //   }));
  // }

  const [meme, setMeme] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const navigate = useNavigate();
  const updateCaption = (e, index) => {
    const textCaption = e.target.value || "";
    setCaptions(
      captions.map((caption, i) => (i === index ? textCaption : caption))
    );
  };

  function generateMeme() {
    const currentMeme = meme[memeIndex];
    const formData = new FormData();
    formData.append("username", "ChinemeremDaniel");
    formData.append("password", "8!zXJi5h3HNiacj");
    formData.append("template_id", currentMeme.id);

    captions.forEach((caption, index) => {
      formData.append(`boxes[${index}][text]`, caption);
    });

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.url);
        navigate(`/generate?url=${res.data.url}`);
      });
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const _memes = res.data.memes;
        shuffle(_memes);
        setMeme(_memes);
      });
  }, []);

  useEffect(() => {
    if (meme.length > 0) {
      setCaptions(Array(meme[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, meme]);

  return meme.length ? (
    <main className="main">
      <div className="centerBtn">
        <button className="btn" onClick={() => navigate("/uploadMeme")}>
          {" "}
          Create Your Own meme
        </button>
        <h2>
          Input your meme captions and
          <br />
          Click on Create Meme button, below the Image to automatically arrange
          your meme captions
        </h2>
      </div>
      <div className="form">
        {captions.map((c, index) => (
          <input
            className="input"
            onChange={(e) => updateCaption(e, index)}
            key={index}
            placeholder={` caption ${index + 1}`}
          />
        ))}
      </div>
      <div className="centerBtn">
        <button className="btn" onClick={() => setMemeIndex(memeIndex + 1)}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme[memeIndex].url} className="meme-image" alt="meme pic" />
        <div className="centerBtn">
          <button className="btn" onClick={generateMeme}>
            Create Meme
          </button>
        </div>
      </div>
    </main>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default MemeText;
