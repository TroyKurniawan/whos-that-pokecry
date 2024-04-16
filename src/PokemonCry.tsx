import { useState, useEffect } from "react";
import axios from "axios";

type PokemonCryProps = {
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const PokemonCry = ({ callback }: PokemonCryProps) => {
  const [cry, setCry] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");

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

  // ===============================================

  return (
    <div className="w-96 h-96 bg-white grid justify-center content-center rounded-xl m-4">
      <audio src={cry} controls autoPlay hidden className="m-4" />

      <button
        onClick={randomCry}
        className="bg-red-500 text-white font-bold text-xl p-4 m-4 hover:bg-red-600 rounded-xl"
      >
        Skip
      </button>
    </div>
  );
};

export default PokemonCry;
