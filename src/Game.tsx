import { useState, useEffect } from "react";
import PlayerInput from "./PlayerInput";
import PokemonCry from "./PokemonCry";
import Score from "./Score";

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
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [nextPokemon, setNextPokemon] = useState(false);

  // ===============================================

  // Check answer
  useEffect(() => {
    let result: boolean;

    if (playerAnswer !== "") {
      console.log("playerAnswer: " + playerAnswer);
      console.log("currentPokemon: " + currentPokemon);

      // Legacy Cry
      if (legacyCry) {
        // Charizard/Rhyhorn edge case
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
        }

        // Poliwag/Ditto edge case
        else if (
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

        // Normal Check
        else {
          if (playerAnswer.toLowerCase() === currentPokemon.toLowerCase()) {
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

      // Correct
      if (result!) {
        console.log("Yippee!");
        setCorrect(true);
        setTimeout(() => {
          setCorrect(false);
        }, 1000);

        // Update streak
        setStreak((prevStreak) => prevStreak + 1);
        if (streak >= maxStreak)
          setMaxStreak((prevMaxStreak) => prevMaxStreak + 1);

        // Invoke the randomcry function in PokemonCry
        setNextPokemon((prev) => !prev);
      }
      // Incorrect
      else {
        console.log("Nah lmao");
        setIncorrect(true);
        setTimeout(() => {
          setIncorrect(false);
        }, 1000);

        // Reset streak
        setStreak(0);
      }

      // Clear playerAnswer and input field
      (document.getElementById("playerInput") as HTMLInputElement)!.value = "";
      setPlayerAnswer("");
    }
  }, [playerAnswer, currentPokemon]);

  // ===============================================

  return (
    <div className="grid justify-items-center">
      {/* Score */}
      <Score
        streak={streak}
        maxStreak={maxStreak}
        correct={correct}
        incorrect={incorrect}
      />

      {/* Pokémon's Cry */}
      <PokemonCry
        setCurrentPokemon={setCurrentPokemon}
        legacyCry={legacyCry}
        filterGens={filterGens}
        toggleGame={toggleGame}
        setStreak={setStreak}
        nextPokemon={nextPokemon}
      />

      {/* Player Input */}
      <PlayerInput callbackPlayerAnswer={setPlayerAnswer} />

      {/* Exit */}
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
