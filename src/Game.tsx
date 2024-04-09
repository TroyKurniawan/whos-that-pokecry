import React, { useState, useEffect } from "react";
import axios from "axios";

const Game = () => {
  const [cry, setCry] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");
  const [currentPokemon, setCurrentPokemon] = useState("");

  // ===============================================

  // Generate new url string
  const randomCry = () => {
    let newUrl: string =
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
      {/* Pokémon's Cry */}
      <div className="w-96 h-auto bg-white grid justify-center content-center rounded-xl m-4">
        <button
          onClick={randomCry}
          className="bg-red-500 text-white font-bold text-2xl p-4 m-4 hover:bg-red-600 rounded-xl"
        >
          NEW CRY
        </button>

        <audio src={cry} controls autoPlay className="m-4">
          Your browser does not support the audio tag.
        </audio>
      </div>

      {/* Player Input */}
      <div className="flex">
        <div className="absolute m-4 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className="opacity-30"
          >
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>{" "}
          </svg>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAnswer();
          }}
        >
          <input
            maxLength={12}
            placeholder="Search Pokémon..."
            className="w-96 m-4 pl-14 p-4 rounded-xl"
            type="search"
            id="playerInput"
            required={true}
          ></input>
          {/* <button className="m-4 border">Submit</button> */}
        </form>
      </div>

      <ul></ul>
    </div>
  );
};

export default Game;
