import { useState, useEffect } from "react";
import { PokemonList } from "./assets/pokemon-list.js";
import ToggleSwitch from "./ToggleSwitch";

type PracticeProps = {
  closePractice: React.Dispatch<React.SetStateAction<boolean>>;
};

const Practice = ({ closePractice }: PracticeProps) => {
  const [cry, setCry] = useState("");
  const [latestCry, setLatestCry] = useState(true);
  const audioPractice = document.getElementById(
    "audioPractice"
  ) as HTMLAudioElement;
  const title: string = "Legacy cries";
  const subtitle: string =
    "When available, play cries from before generation 6.";

  useEffect(() => {
    if (cry) {
      // Setup play
      const audioPracticePromise = audioPractice.play();

      // Begin play's promise
      if (audioPracticePromise !== undefined) {
        audioPracticePromise
          .then((_) => {
            // Success
            audioPractice.volume = 0.3;
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log(error);
          });
      }
    }
  }, [cry, audioPractice]);

  return (
    // Dim background
    <div className="fixed size-full bg-black bg-opacity-50 grid justify-center content-center z-10">
      {/* Cry */}
      <audio src={cry} autoPlay hidden id="audioPractice" />

      {/* Container */}
      <div className="grid justify-center content-center w-[28rem] h-[48rem] bg-white rounded-xl text-center p-4">
        {/* X button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 absolute stroke-gray-500 hover:stroke-gray-600 cursor-pointer justify-self-end grid"
          onClick={(e) => closePractice(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        {/* Header */}
        <div className="border-b">
          <h1 className="text-2xl font-bold">Listen to all Pokémon cries!</h1>
          <ToggleSwitch
            callback={setLatestCry}
            title={title}
            subtitle={subtitle}
          />
        </div>

        {/* Contents */}
        <div className="overflow-y-auto">
          {PokemonList.map((pkmn) => (
            <div key={pkmn.id} className="grid justify-center">
              <button
                onClick={(e) => {
                  // If the player clicks the same Pokemon's cry again
                  if (cry === pkmn.latest_cry || pkmn.legacy_cry) {
                    setCry(cry);
                  }
                  // If Latest Cry
                  if (latestCry) {
                    console.log("Latest!");
                    setCry(pkmn.latest_cry);
                  }
                  // If Legacy Cry
                  else {
                    // Only if legacy cry is present
                    if (pkmn.legacy_cry !== "") {
                      console.log("Legacy!");
                      setCry(pkmn.legacy_cry);
                    }
                    // If not use latest cry
                    else setCry(pkmn.latest_cry);
                  }
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
