import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");
  const [Name, setName] = useState("");
  const [initialName, setInitialName] = useState("");
  // const initialName=Name;
  console.log("inithhhh---", initialName);

  const handleUpClick = () => {
    setText(Text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(Text.toLowerCase());
  };

  let sentenceClick = () => {
    let sentence = Text.split(".");
    let sentenceText = sentence.map((sentence) => {
      let trimmedText = sentence.trim();
      if (trimmedText.length > 0) {
        let firstLetter = trimmedText.charAt(0).toUpperCase();
        let restOfText = trimmedText.slice(1).toLowerCase();
        let newText = firstLetter + restOfText;
        return newText;
      }
      return "";
    });
    let sentenceCaseResult = sentenceText.join(". ");
    setText(sentenceCaseResult);
  };

  let handlespaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    let text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const clearClick = () => {
    setText("");
  };
  const handleChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const handleAboutClick = () => {
    if (props.onAboutClick) {
      console.log("hlloooooo");
      setInitialName(Name);
      console.log("initiii-", initialName, Name);
      props.onAboutClick(Name);
    }
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>"Enter text to analyze"</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textArea"
            value={Text}
            onChange={handleChange}
            rows="7"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-info mx-1 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info mx-1 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-info mx-1 my-2" onClick={sentenceClick}>
          Sentence case
        </button>
        <button className="btn btn-info mx-1 my-2" onClick={handlespaces}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-info mx-1" onClick={handleCopy}>
          Copy text
        </button>

        <button className="btn btn-info mx-1" onClick={clearClick}>
          Clear All
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          No.of words={Text.split(" ").length} and No.of characters=
          {Text.length}{" "}
        </p>
        <p>{0.008 * Text.split(" ").length}minutes read</p>
        <h2>Preview text</h2>
        <p>{Text}</p>
        Name:{" "}
        <input
          type="text"
          placeholder="enter your name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <button className="btn btn-info mx-1 my-2 " onClick={handleAboutClick}>
          Go to About Section
        </button>
        <br />
        <p className="my-2">Your name is {props.prevName || Name}</p>
        <p>Your updated name is {props.aboutName}</p>
      </div>
    </>
  );
}
