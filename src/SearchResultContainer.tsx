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
          className="overflow-y-auto absolute m-4 bottom-16 p-4 size-96 bg-white justify-center rounded-xl -translate-y-6"
        >
          {/* List out Pokemon from pokemon-list.js, then filter out results based on input */}
          {PokemonList.filter((pkmn) =>
            pkmn.name.toLowerCase().includes(input)
          ).map((pkmn) => (
            <div key={pkmn.id} className="grid justify-center">
              <button
                onMouseDown={(e) => {
                  callbackPlayerAnswer(pkmn.name);
                  input = "";
                }}
                className="text-center items-center text-xl w-80 h-14 border-b hover:bg-gray-100 cursor-pointer flex"
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
