import { useState, useEffect } from "react";
import { PokemonList } from "./assets/pokemon-list.js";
import ToggleSwitch from "./ToggleSwitch";

type PracticeProps = {
  closePractice: React.Dispatch<React.SetStateAction<boolean>>;
};

const Practice = ({ closePractice }: PracticeProps) => {
  const [cry, setCry] = useState("");
  const [latestCry, setLatestCry] = useState(true);
  const [practiceInput, setPracticeInput] = useState("");
  const audioPractice = document.getElementById(
    "audioPractice"
  ) as HTMLAudioElement;

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
    <div className="h-screen w-screen fixed grid justify-center content-center">
      {/* Cry */}
      <audio src={cry} autoPlay hidden id="audioPractice" />

      {/* Dim background */}
      <div
        className="h-screen w-screen fixed bg-black opacity-50 -z-10"
        onClick={(e) => closePractice(false)}
      />

      {/* Container */}
      <div className="grid content-start w-[28rem] h-[46rem] bg-white rounded-xl text-center p-4 z-50">
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
        <div className="border-b pb-2">
          <h1 className="text-2xl font-bold mb-2">
            Listen to all Pokémon cries!
          </h1>
          <ToggleSwitch
            callback={setLatestCry}
            title={"Legacy cries"}
            subtitle={
              "When available, play original cries made before generation 6's update."
            }
            init={false}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gb-sounds.png"
            }
          />

          {/* Magnifying Glass SVG */}
          <div className="absolute pl-[3.2rem] m-4 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-30"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </div>

          {/* Input Field */}
          <input
            maxLength={12}
            placeholder="Search Pokémon..."
            type="search"
            id="practiceInput"
            autoComplete="off"
            className="w-80 m-4 pl-14 p-4 rounded-xl border-2"
            onChange={(e) =>
              setPracticeInput(
                (document.getElementById("practiceInput") as HTMLInputElement)!
                  .value
              )
            }
          ></input>
        </div>

        {/* Contents */}
        <div className="overflow-y-auto overflow-x-hidden">
          {PokemonList.filter((pkmn) =>
            pkmn.name.toLowerCase().includes(practiceInput)
          ).map((pkmn) => (
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
