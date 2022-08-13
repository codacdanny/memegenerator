import React from "react";
import { useLocation } from "react-router-dom";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const GeneratedMeme = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  let query = url.get("url");

  const downloadImage = () => {
    saveAs(query, "meme.jpg");
  };
  return (
    <div>
      {query && <img className="editMeme" alt="meme" src={query} />}
      <div className="generatedBtn centerBtn">
        <button className="btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn" onClick={downloadImage}>
          Download
        </button>
      </div>
    </div>
  );
};

export default GeneratedMeme;
