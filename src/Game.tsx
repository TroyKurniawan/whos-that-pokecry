import { useState, useEffect } from "react";
import PlayerInput from "./PlayerInput";
import PokemonCry from "./PokemonCry";

type GameProps = {
  legacyCry: boolean;
  callbackFilterGens: React.Dispatch<React.SetStateAction<boolean>>[];
  filterGens: boolean[];
};

const Game = ({ legacyCry, filterGens }: GameProps) => {
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
    <div>
      {/* Pokémon's Cry */}
      <PokemonCry
        callbackCurrentPokemon={setCurrentPokemon}
        legacyCry={legacyCry}
        filterGens={filterGens}
      />

      {/* Player Input */}
      <PlayerInput callbackPlayerAnswer={setPlayerAnswer} />
    </div>
  );
};

export default Game;
