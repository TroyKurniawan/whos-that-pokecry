import React from "react";

type PokemonResultProps = {
  pokemonSprite: string;
  pokemonName: string;
};

const PokemonResult = ({ pokemonSprite, pokemonName }: PokemonResultProps) => {
  return (
    <div className="h-full w-full fixed grid justify-center">
      <div className=" bg-black opacity-20 fixed"></div>
      <div className="size-96">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png"></img>
      </div>
    </div>
  );
};

export default PokemonResult;
