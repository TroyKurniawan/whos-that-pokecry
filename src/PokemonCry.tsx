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
    setUrl(newUrl);
  };

  // Get new cry using new url string
  useEffect(() => {
    if (url) {
      axios.get(url).then((res) => {
        console.log(res);
        audioGame.volume = 0.3;
        setCry(res.data.cries.latest); // Sets the URL of the new Pokemon's cry.
        callback(res.data.name.replace("-", " ")); // Send the name of the new Pokemon to Game.tsx; replace "-" with " "
      });
    }
  }, [url, audioGame, callback]);

  // Plays
  const playAudio = () => {
    if (cry) {
      // Setup play
      const audioGamePromise = audioGame.play();

      // Begin play's promise
      if (audioGamePromise !== undefined) {
        audioGamePromise
          .then((_) => {
            // Success
            audioGame.volume = 0.3;
          })
          .catch((error) => {
            // Auto-play was prevented
          });
      }
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
        className="bg-red-500 text-white font-bold text-xl p-4 m-4 w-52 rounded-xl justify-center grid
        hover:bg-red-600 active:bg-red-700
        transition ease-out duration-75"
      >
        Skip
        {/* <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg> */}
      </button>
    </div>
  );
};

export default PokemonCry;
