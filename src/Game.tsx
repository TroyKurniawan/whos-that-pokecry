import { useState, useEffect } from "react";
import PlayerInput from "./PlayerInput";
import PokemonCry from "./PokemonCry";

type GameProps = {
  legacyCry: boolean;
  filterGens: boolean[];
  setToggleGame: React.Dispatch<React.SetStateAction<boolean>>;
  toggleGame: boolean;
};

const Game = ({
  legacyCry,
  filterGens,
  setToggleGame,
  toggleGame,
}: GameProps) => {
  const [currentPokemon, setCurrentPokemon] = useState("");
  const [playerAnswer, setPlayerAnswer] = useState("");

  // ===============================================

  // Check answer
  useEffect(() => {
    let result: boolean;

    if (playerAnswer !== "") {
      console.log("playerAnswer: " + playerAnswer);
      console.log("currentPokemon: " + currentPokemon);

      // Legacy Cry
      if (legacyCry) {
        // Charizard/Rhyhorn and Poliwag/Ditto edge case
        if (
          currentPokemon.toLowerCase() === "charizard" ||
          currentPokemon.toLowerCase() === "rhyhorn"
        ) {
          if (
            playerAnswer.toLowerCase() === "charizard" ||
            playerAnswer.toLowerCase() === "rhyhorn"
          ) {
            result = true;
          } else {
            result = false;
          }
        } else if (
          currentPokemon.toLowerCase() === "poliwag" ||
          currentPokemon.toLowerCase() === "ditto"
        ) {
          if (
            playerAnswer.toLowerCase() === "poliwag" ||
            playerAnswer.toLowerCase() === "ditto"
          ) {
            result = true;
          } else {
            result = false;
          }
        }
      }
      // Not Legacy Cry
      else {
        if (playerAnswer.toLowerCase() === currentPokemon.toLowerCase()) {
          result = true;
        } else {
          result = false;
        }
      }

      // Result
      if (result!) {
        alert("Yippee!");
      } else {
        alert("Nah lmao");
      }

      // Clear playerAnswer and input field
      (document.getElementById("playerInput") as HTMLInputElement)!.value = "";
      setPlayerAnswer("");
    }
  }, [playerAnswer, currentPokemon]);

  // ===============================================

  return (
    <div className="grid justify-items-center">
      {/* Pokémon's Cry */}
      <PokemonCry
        callbackCurrentPokemon={setCurrentPokemon}
        legacyCry={legacyCry}
        filterGens={filterGens}
        toggleGame={toggleGame}
      />

      {/* Player Input */}
      <PlayerInput callbackPlayerAnswer={setPlayerAnswer} />

      <button
        className="w-24 m-4 p-2 border border-red-500 text-red-500 rounded-xl  text-lg
          hover:bg-red-500 hover:text-white active:bg-red-600 active:text-white
            transition ease-out duration-100
            flex content-center justify-center items-center"
        onClick={(e) => setToggleGame(false)}
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

export default Game;
