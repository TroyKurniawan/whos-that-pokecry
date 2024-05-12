import { useState, useEffect } from "react";
import { PokemonList } from "./assets/pokemon-list.js";

type PracticeProps = {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
};

const Practice = ({ callback }: PracticeProps) => {
  const [cry, setCry] = useState("");
  const audio = document.getElementById("audio") as HTMLAudioElement;

  // Hide Practice window when X is clicked
  const togglePractice = () => {
    callback(false);
  };

  useEffect(() => {
    if (cry) {
      audio!.play();
    }
  }, [cry]);

  //   Plays cry
  const playAudio = () => {};

  return (
    // Dim background
    <div className="fixed size-full bg-black bg-opacity-50 grid justify-center content-center z-10">
      {/* Cry */}
      <audio src={cry} controls autoPlay hidden id="audio" />

      {/* Container */}
      <div className="grid justify-center content-center w-[24rem] h-[48rem] bg-white rounded-xl text-center p-4">
        {/* X button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="w-6 h-6 absolute stroke-gray-500 hover:stroke-gray-600 cursor-pointer justify-self-end grid"
          onClick={togglePractice}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <h1 className="text-xl font-bold pb-4 mb border-b">
          Listen to all Pokémon cries:
        </h1>

        {/* Contents */}
        <div className="overflow-auto">
          {PokemonList.map((pkmn) => (
            <div key={pkmn.id} className="grid justify-center">
              <button
                onClick={(e) => {
                  setCry(pkmn.latest_cry);
                }}
                className="text-center items-center text-xl w-80 h-14 border-b hover:bg-gray-100 cursor-pointer flex"
              >
                <img
                  src={pkmn.sprite}
                  alt={pkmn.name}
                  className="size-10 ml-16 mr-4"
                ></img>
                {pkmn.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
