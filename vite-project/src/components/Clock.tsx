import { useState } from "react";

export default function Clock(prop) {
  const { img, backGroundColor } = prop;
  const [widthSize, setWidthSize] = useState(100);

  const [backColor, setBackColor] = useState(backGroundColor);
  const [imgBackColor, setImgBackColor] = useState(backColor);
  const [imgBorder, setImgBorder] = useState(backColor);

  const [borderORBackground, setBorderOrBackGropund] = useState("background");
  console.log(borderORBackground);

  const setBackColorFunction = (colorVal) => {
    if (borderORBackground == "border") {
      setImgBorder(colorVal);
    }
    if (borderORBackground == "background") {
      setImgBackColor(colorVal);
    }
  };

  return (
    <>
      <label htmlFor="">Background</label>
      <input
        type="radio"
        name="box-selection"
        value="background"
        onChange={(e) => setBorderOrBackGropund(e.target.value)}
      />
      <label htmlFor="">Border</label>
      <input
        type="radio"
        name="box-selection"
        value="border"
        onChange={(e) => setBorderOrBackGropund(e.target.value)}
      />
      <button onClick={() => setWidthSize(widthSize + 20)}>
        Increase picture Size
      </button>
      <button onClick={() => setWidthSize(widthSize - 20)}>
        Decrease picture Size
      </button>
      <div>
        <img
          src={`../../src/images/${img}`}
          alt=""
          //   style={{ backgroundColor: backColor, width: widthSize + "px" }}
          style={{
            backgroundColor: imgBackColor,
            width: widthSize,
            border: `3px solid ${imgBorder}`,
          }}
        />
      </div>
      <input
        type="color"
        value={backColor}
        onChange={(e) => setBackColorFunction(e.target.value)}
      />
      <hr />
    </>
  );
}
