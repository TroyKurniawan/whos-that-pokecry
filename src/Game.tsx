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
    if (playerAnswer !== "") {
      console.log("playerAnswer: " + playerAnswer);
      console.log("currentPokemon: " + currentPokemon);
      // Correct or Incorrect
      if (playerAnswer.toLowerCase() === currentPokemon.toLowerCase()) {
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
    <div className="">
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
