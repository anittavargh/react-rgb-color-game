import "./App.css";
import React, { useEffect, useState } from "react";

export default function ColorGame() {
  const [mode, setMode] = useState("hard");
  const [numberOfSquares, setNumberOfSquares] = useState();
  const [selectColor, setSelectColor] = useState();
  const [arrayOfColors, setarrayOfColors] = useState([]);
  const [gameMessage, setGameMessage] = useState("");
  const [headingBg, setHeadingBg] = useState("steelblue");
  const [buttonMessage, setButtonMessage] = useState("NEW COLORS");

  useEffect(() => {
    setUpSquares();
    reset();
  }, [numberOfSquares]);

  const setUpSquares = () => {
    if (mode === "hard") {
      setNumberOfSquares(6);
    } else {
      setNumberOfSquares(3);
    }
  };

  const reset = () => {
    setGameMessage("");
    setButtonMessage("NEW COLORS");
    const colors = generateRandomColors();
    setarrayOfColors(colors);

    const pickedColor = pickColor();

    setSelectColor(colors[pickedColor]);
  };

  const pickColor = () => {
    var random = Math.floor(Math.random() * numberOfSquares);
    return random;
  };

  const generateRandomColors = () => {
    var arr = [];
    //repeat num times
    console.log("squares", numberOfSquares);
    for (var i = 0; i < numberOfSquares; i++) {
      //get random color and push into arr
      arr.push(randomColor());
    }
    //return that array
    return arr;
  };

  function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  const checkColor = (element, index) => {
    if (element == selectColor) {
      setGameMessage("Correct!");
      const sameColors = Object.keys(arrayOfColors).map((index) => {
        return selectColor;
      });
      setButtonMessage("PLAY AGAIN?");
      setarrayOfColors(sameColors);
      setHeadingBg(selectColor);
    } else {
      setGameMessage("Try Again ?");
      const markWrongSelectedColor = Object.values(arrayOfColors).map(
        (e, i) => {
          if (i == index) {
            return "rgb(" + 35 + ", " + 35 + ", " + 35 + ")";
          } else {
            return e;
          }
        }
      );
      setarrayOfColors(markWrongSelectedColor);
    }
  };

  return (
    <div className="body">
      <div className="heading" style={{ backgroundColor: `${headingBg}` }}>
        <h2>The GREAT </h2>
        <h1>{selectColor}</h1>
        <h2>Color Game</h2>
      </div>

      <div className="menu-bar">
        <button onClick={(e) => reset()}>{buttonMessage}</button>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        {gameMessage}
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <button
          onClick={(e) => {
            setMode("easy");
            setNumberOfSquares(3);
            reset();
          }}
        >
          EASY
        </button>
        <button
          onClick={(e) => {
            setMode("hard");
            setNumberOfSquares(6);
            reset();
          }}
        >
          HARD
        </button>
      </div>
      <p></p>
      <div className="container">
        {Object.values(arrayOfColors).map((element, index) => {
          return (
            <button
              class="color-button"
              style={{ backgroundColor: `${element}` }}
              onClick={(e) => checkColor(element, index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
