import React, { useState, useEffect } from "react";
import axios from "axios";

const Game = () => {
  const [cry, setCry] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");
  const [currentPokemon, setCurrentPokemon] = useState("");

  // ===============================================

  // Generate new url string
  const randomCry = () => {
    let newUrl =
      "https://pokeapi.co/api/v2/pokemon/" +
      (Math.floor(Math.random() * 1025) + 1) +
      "/";
    console.log(newUrl);
    setUrl(newUrl);
  };

  // Get new cry using new url string
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setCry(res.data.cries.latest);
      setCurrentPokemon(res.data.name);
    });
  }, [url]);

  // Answer is submitted
  const submitAnswer = () => {
    const playerAnswer = (document.getElementById(
      "playerInput"
    ) as HTMLInputElement)!.value;

    if (playerAnswer.toLowerCase() == currentPokemon.toLowerCase()) {
      alert("Yippee!");
    } else {
      alert("Nah lmao");
    }
  };

  // ===============================================

  return (
    <div className="h-3/4 grid justify-center content-center">
      <div className="w-96 h-auto bg-white grid justify-center content-center rounded-xl m-4">
        <button
          onClick={randomCry}
          className="bg-red-500 text-white text-2xl p-4 m-4 hover:bg-red-600 rounded-xl"
        >
          NEW CRY
        </button>

        <audio src={cry} controls className="m-4">
          Your browser does not support the audio tag.
        </audio>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAnswer();
          }}
        >
          <input
            maxLength={12}
            placeholder="Search Pokémon..."
            className="w-96 m-4 p-4 border rounded-xl"
            type="search"
            id="playerInput"
            required={true}
          ></input>
          {/* <button className="m-4 border">Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Game;
