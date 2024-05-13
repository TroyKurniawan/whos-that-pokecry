import { useState, useEffect } from "react";
import axios from "axios";

type PokemonCryProps = {
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const PokemonCry = ({ callback }: PokemonCryProps) => {
  const [cry, setCry] = useState("");
  const [url, setUrl] = useState("");
  const audioGame = document.getElementById("audioGame") as HTMLAudioElement;

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
    if (url) {
      axios.get(url).then((res) => {
        console.log(res);
        setCry(res.data.cries.latest); // Sets the URL of the new Pokemon's cry.
        callback(res.data.name.replace("-", " ")); // Send the name of the new Pokemon to Game.tsx; replace "-" with " "
      });
    }
  }, [url]);

  // Plays
  const playAudio = () => {
    if (cry) {
      audioGame.volume = 0.3;
      audioGame!.play();
    }
  };

  // ===============================================

  return (
    <div className="size-96 bg-white grid justify-center content-center justify-items-center rounded-xl m-4">
      <audio
        src={cry}
        controls
        autoPlay
        hidden
        className="m-4"
        id="audioGame"
      />

      <button
        className="size-52 p-4 m-4 bg-gray-700 rounded-xl text-white font-bold text-xl
        hover:bg-gray-800 active:bg-gray-900
        transition ease-out duration-75"
        onClick={playAudio}
      >
        Listen
      </button>

      <button
        onClick={randomCry}
        className="bg-red-500 text-white font-bold text-xl p-4 m-4 w-52 rounded-xl
        hover:bg-red-600 active:bg-red-700
        transition ease-out duration-75"
      >
        Skip
      </button>
    </div>
  );
};

export default PokemonCry;
