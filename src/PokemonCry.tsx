import { useState, useEffect } from "react";
import axios from "axios";

const PokemonCry = ({ callback }: any) => {
  const [cry, setCry] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/");

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
      callback(res.data.name);
    });
  }, [url]);

  // ===============================================

  return (
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
  );
};

export default PokemonCry;
