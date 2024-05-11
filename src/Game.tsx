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
      if (playerAnswer.toLowerCase() === currentPokemon.toLowerCase()) {
        alert("Yippee!");
      } else {
        alert("Nah lmao");
      }
    }
  }, [playerAnswer]);

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
