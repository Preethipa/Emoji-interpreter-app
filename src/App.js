import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "Smiling",
  "โค๏ธ": "Love",
  "๐ค": "Hug",
  "๐": "Blessing",
  "๐คค": "Attractive",
  "๐": "Winking",
  "๐": "Enthusiastic",
  "๐คฉ": "Amazing",
  "๐": "Delicious",
  "๐ฅฐ": "Affectionate feelings",
  "๐ค": "Think",
  "๐คซ": "Quiet",
  "๐คญ": "Embarrassment",
  "๐": "Fun",
  "๐คช": "Silliness",
  "๐คจ": "Disapproval",
  "๐": "Annoyance",
  "๐ฐ": "Anxious",
  "๐ง": "Anguished ",
  "๐": "Unamused",
  "๐ ": "Angry",
  "๐ถ": "Speechlessness",
  "๐ต": "Disbelief",
  "๐ฒ": "Shock",
  "๐": "Mild irritation",
  "๐": "Disappointment",
  "๐ข": "Cry",
  "๐ฅบ": "Pleading",
  "๐": "Sad",
  "๐ด": "Sleep"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput === undefined) {
      meaning = "This is not defined in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji's Reaction</h1>
      <input
        style={{ padding: "0.5rem 7rem ", backgroundColor: "antiquewhite" }}
        onChange={emojiInputHandler}
      ></input>

      <h2>{meaning}</h2>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
