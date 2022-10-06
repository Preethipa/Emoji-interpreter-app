import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "❤️": "Love",
  "🤗": "Hug",
  "😇": "Blessing",
  "🤤": "Attractive",
  "😉": "Winking",
  "😍": "Enthusiastic",
  "🤩": "Amazing",
  "😋": "Delicious",
  "🥰": "Affectionate feelings",
  "🤔": "Think",
  "🤫": "Quiet",
  "🤭": "Embarrassment",
  "😜": "Fun",
  "🤪": "Silliness",
  "🤨": "Disapproval",
  "😑": "Annoyance",
  "😰": "Anxious",
  "😧": "Anguished ",
  "😒": "Unamused",
  "😠": "Angry",
  "😶": "Speechlessness",
  "😵": "Disbelief",
  "😲": "Shock",
  "😐": "Mild irritation",
  "😞": "Disappointment",
  "😢": "Cry",
  "🥺": "Pleading",
  "😔": "Sad",
  "😴": "Sleep"
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
