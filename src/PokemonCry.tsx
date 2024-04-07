import axios from "axios";
import React, { useState, useEffect } from "react";

const PokemonCry = () => {
  const [cry, setCry] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");

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
      // console.log(res);
      setCry(res.data.cries.latest);
    });
  }, [url]);

  // ============================

  return (
    <div className="w-96 h-auto bg-white grid justify-center content-center rounded-xl">
      <button
        onClick={randomCry}
        className="bg-red-500 text-white text-2xl p-4 m-4 hover:bg-red-600"
      >
        NEW CRY
      </button>

      <audio src={cry} controls className="m-4">
        <source src={cry} type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default PokemonCry;
