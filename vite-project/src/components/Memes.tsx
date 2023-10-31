import React, { useState } from "react";
import "./style-memes.css";
import { memesData } from "../utility/data";
const Memes = () => {
  const [url, setUrl] = useState("");
  let meme;
  function handleClick() {
    console.log("iam clicked..");
  }
  function getMemePicture() {
    const memeDataArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeDataArray.length);
    const url = memeDataArray[randomNumber].url;
    setUrl(url);
  }

  return (
    <>
      <main>
        <div className="header">
          <h2>Meme Generator</h2>
        </div>
        <section>
          <input className="first-text" type="text" placeholder="First Text" />
          <input
            className="second-text"
            type="text"
            placeholder="Second Text"
          />
          <button onClick={getMemePicture}>Get new meme Image</button>
        </section>
        <div className="main-meme-section">
          <img src={`${url}`} alt="meme pic" />
        </div>
      </main>
    </>
  );
};

export default Memes;
