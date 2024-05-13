import { useState, useEffect } from "react";
import PlayerInput from "./PlayerInput";
import PokemonCry from "./PokemonCry";

const Game = () => {
  const [currentPokemon, setCurrentPokemon] = useState("");
  const [playerAnswer, setPlayerAnswer] = useState("");

  // ===============================================

  // Check answer
  useEffect(() => {
    if (playerAnswer !== "") {
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
      <PokemonCry callback={setCurrentPokemon} />

      {/* Player Input */}
      <PlayerInput callback={setPlayerAnswer} />
    </div>
  );
};

export default Game;
