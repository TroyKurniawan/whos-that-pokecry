import { useState, useEffect } from "react";
import axios from "axios";

type PokemonCryProps = {
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const PokemonCry = ({ callback }: PokemonCryProps) => {
  const [cry, setCry] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");
  const audio = document.getElementById("audio") as HTMLAudioElement;

  // ===============================================

  // Generate new url string
  const randomCry = () => {
    let newUrl: string =
      "https://pokeapi.co/api/v2/pokemon/" +
      (Math.floor(Math.random() * 1025) + 1) +
      "/"; // Concat a string of a random Pokemon
    console.log(newUrl);
    setUrl(newUrl);
  };

  // Get new cry using new url string
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setCry(res.data.cries.latest); // Sets the URL of the new Pokemon's cry.
      callback(res.data.name.replace("-", " ")); // Send the name of the new Pokemon to Game.tsx; replace "-" with " "
    });
  }, [url]);

  // Plays
  const playAudio = () => {
    audio!.play();
  };

  // ===============================================

  return (
    <div className="size-96 bg-white grid justify-center content-center justify-items-center rounded-xl m-4">
      <audio src={cry} controls autoPlay hidden className="m-4" id="audio" />

      <button
        className="size-52 p-4 m-4 bg-gray-700 rounded-xl text-white font-bold text-xl hover:bg-gray-800 active:bg-gray-900"
        onClick={playAudio}
      >
        Listen
      </button>

      <button
        onClick={randomCry}
        className="bg-red-500 text-white font-bold text-xl p-4 m-4 w-52 rounded-xl hover:bg-red-600 active:bg-red-700"
      >
        Skip
      </button>
    </div>
  );
};

export default PokemonCry;
