import { PokemonList } from "./assets/pokemon-list.js";

type SearchResultContainerProps = {
  input: string;
  answer: React.Dispatch<React.SetStateAction<string>>;
};

const SearchResultContainer = ({
  input,
  answer,
}: SearchResultContainerProps) => {
  // If empty, do not display results
  if (input.length < 1) {
    return null;
  }
  // If user types any input, display results
  else {
    return (
      <div
        id="search"
        className="overflow-auto absolute m-4 bottom-16 p-4 size-96 size bg-white justify-center rounded-xl"
      >
        {/* List out Pokemon from pokemon-list.js, then filter out results based on input */}
        {PokemonList.filter((pkmn) =>
          pkmn.name.toLowerCase().includes(input)
        ).map((pkmn) => (
          <div key={pkmn.id} className="grid justify-center">
            <button
              onClick={(e) => {
                answer(pkmn.name);
              }}
              className="text-center items-center font-bold text-xl w-80 h-14 border-b hover:bg-gray-100 cursor-pointer flex"
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
    );
  }
};

export default SearchResultContainer;
