import React, { useState } from "react";
import "./style-memes.css";
import { memesData } from "../utility/data";
const Memes = () => {
  const [url, setUrl] = useState("");
  const [nameText, setNameText] = useState("");
  const [memeText, setMemeText] = useState("");
  const [printMeme, setPrintMeme] = useState("");

  function getMemePicture() {
    const memeDataArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeDataArray.length);
    const url = memeDataArray[randomNumber].url;
    setUrl(url);

    setPrintMeme(`${nameText} ${memeText}`);
    setMemeText("");
    setNameText("");
  }

  return (
    <>
      <main>
        <div className="header">
          <h2>Meme Generator</h2>
        </div>
        <section>
          <input
            className="first-text"
            type="text"
            placeholder="First Text"
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
          />
          <input
            className="second-text"
            type="text"
            placeholder="Second Text"
            value={memeText}
            onChange={(e) => setMemeText(e.target.value)}
          />
          <button onClick={getMemePicture}>Get new meme Image</button>
        </section>
        <div className="main-meme-section">
          <img src={`${url}`} alt="meme pic" />
          <h3 className="meme-text">
            {/* {nameText} {memeText} */}
            {printMeme}
          </h3>
        </div>
      </main>
    </>
  );
};

export default Memes;
