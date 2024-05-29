import { useState, useEffect } from "react";
import { PokemonList } from "./assets/pokemon-list.js";
import ToggleSwitch from "./ToggleSwitch";

type PracticeProps = {
  setWindow: React.Dispatch<React.SetStateAction<boolean>>[];
  volume: number;
};

const Practice = ({ setWindow, volume }: PracticeProps) => {
  const [cry, setCry] = useState("");
  const [latestCry, setLatestCry] = useState(true);
  const [practiceInput, setPracticeInput] = useState("");
  const audioPractice = document.getElementById(
    "audioPractice"
  ) as HTMLAudioElement;

  // Display/hide game window
  const togglePractice = () => {
    setWindow[2]((prevPractice) => !prevPractice);
    setWindow[0]((prevMainmenu) => !prevMainmenu);
  };

  useEffect(() => {
    if (cry) {
      // Setup play
      const audioPracticePromise = audioPractice.play();

      // Begin play's promise
      if (audioPracticePromise !== undefined) {
        audioPracticePromise
          .then((_) => {
            // Success
            audioPractice.volume = volume;
          })
          .catch((error) => {
            // Auto-play was prevented
            console.log(error);
          });
      }
    }
  }, [cry, audioPractice]);

  return (
    <div className="grid justify-items-center animate-bump">
      {/* Cry */}
      <audio src={cry} hidden id="audioPractice" />

      {/* Container */}
      <div className="grid content-start w-[28rem] h-[38rem] bg-white rounded-xl text-center p-4 z-50">
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

      {/* Exit */}
      <button
        className="w-24 m-4 p-2 border border-red-500 text-red-500 rounded-xl  text-lg
          hover:bg-red-500 hover:text-white active:bg-red-600 active:text-white
            transition ease-out duration-100
            flex content-center justify-center items-center"
        onClick={togglePractice}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 mr-1"
        >
          <path
            fillRule="evenodd"
            d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        Exit
      </button>
    </div>
  );
};

export default Practice;
