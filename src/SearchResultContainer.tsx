import { PokemonList } from "./assets/pokemon-list.js";

type SearchResultContainerProps = {
  input: string;
  callbackPlayerAnswer: React.Dispatch<React.SetStateAction<string>>;
  focus: boolean;
};

const SearchResultContainer = ({
  input,
  callbackPlayerAnswer,
  focus,
}: SearchResultContainerProps) => {
  // If user focuses, display results
  if (focus && input.length > 1) {
    return (
      <div className=" rounded-xl">
        <div
          id="search"
          className="bg-white dark:bg-gray-800
          overflow-y-auto absolute m-4 mt-10 p-4 size-80 justify-center rounded-xl -translate-y-6
          md:size-96"
        >
          {/* List out Pokemon from pokemon-list.js, then filter out results based on input */}
          {PokemonList.filter((pkmn) =>
            pkmn.name.toLowerCase().includes(input.toLowerCase())
          ).map((pkmn) => (
            <div key={pkmn.id} className="grid justify-center">
              <button
                onMouseDown={(e) => {
                  callbackPlayerAnswer(pkmn.name);
                  input = "";
                }}
                className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 dark:border-gray-700 border-b
                text-center items-center text-xl w-80 h-14 cursor-pointer flex"
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
    );
  } else {
    return null;
  }
};

export default SearchResultContainer;
