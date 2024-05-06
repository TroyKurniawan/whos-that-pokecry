import { ReactNode } from "react";
import axios from "axios";
import { PokemonList } from "./assets/pokemon-list.js";

type SearchResultContainerProps = {
  input: string;
};

const getPokemon = () => {
  for (let i = 1; i <= 1025; i++) {
    let url: string = "https://pokeapi.co/api/v2/pokemon/" + i + "/"; // Concat a string of Pokemon from 1 to 1025
    axios.get(url).then((res) => {
      return <div> {res.data.name} </div>;
    });
  }
};

const SearchResultContainer = ({ input }: SearchResultContainerProps) => {
  // If empty, do not display results
  if (input === "") {
    return null;
  }
  // If user types any input, display results
  else {
    return (
      <div
        id="search"
        className="grid overflow-auto absolute m-4 bottom-16 p-4 size-96 size bg-white justify-center rounded-xl"
      >
        {PokemonList.map((pkmn) => (
          <>
            <button
              onClick={(e) => {
                alert("test");
              }}
              className="text-center items-center font-bold text-xl w-80 h-14 border-b hover:bg-gray-100 cursor-pointer flex"
            >
              <img src={pkmn.sprite} className="size-10 m-10"></img>
              {pkmn.name}
            </button>
          </>
        ))}
      </div>
    );
  }
};

export default SearchResultContainer;
