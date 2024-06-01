import { useState, useEffect } from "react";
import axios from "axios";
import { TIMER } from "./App";

type PokemonCryProps = {
  setCurrentPokemon: React.Dispatch<React.SetStateAction<string>>;
  legacyCry: boolean;
  filterGens: boolean[];
  game: boolean;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  nextPokemon: boolean;
  volume: number;
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  correct: boolean;
  setIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
};

const toTitleCase = (str: string) => {
  return str
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const PokemonCry = ({
  setCurrentPokemon,
  legacyCry,
  filterGens,
  game,
  setStreak,
  nextPokemon,
  volume,
  showResult,
  setShowResult,
  correct,
  setIncorrect,
}: PokemonCryProps) => {
  const [cry, setCry] = useState("");
  const [url, setUrl] = useState("");
  const audioGame = document.getElementById("audioGame") as HTMLAudioElement;
  const [sprite, setSprite] = useState("");
  const [pokemonAnswer, setPokemonAnswer] = useState("");

  // ===============================================

  const checkGen1 = (newCry: number) => {
    if (1 <= newCry && newCry <= 151) return true;
    else return false;
  };
  const checkGen2 = (newCry: number) => {
    if (152 <= newCry && newCry <= 251) return true;
    else return false;
  };
  const checkGen3 = (newCry: number) => {
    if (252 <= newCry && newCry <= 386) return true;
    else return false;
  };
  const checkGen4 = (newCry: number) => {
    if (387 <= newCry && newCry <= 493) return true;
    else return false;
  };
  const checkGen5 = (newCry: number) => {
    if (494 <= newCry && newCry <= 649) return true;
    else return false;
  };
  const checkGen6 = (newCry: number) => {
    if (650 <= newCry && newCry <= 721) return true;
    else return false;
  };
  const checkGen7 = (newCry: number) => {
    if (722 <= newCry && newCry <= 809) return true;
    else return false;
  };
  const checkGen8 = (newCry: number) => {
    if (810 <= newCry && newCry <= 905) return true;
    else return false;
  };
  const checkGen9 = (newCry: number) => {
    if (906 <= newCry && newCry <= 1025) return true;
    else return false;
  };

  // ===============================================

  // Generate new url string
  const randomCry = () => {
    if (game) {
      let newCry: number;
      while (true) {
        // Generate a number from 1 - 1025
        newCry = Math.floor(Math.random() * 1025) + 1;

        // Check generation filter
        if (filterGens[0] && checkGen1(newCry)) break;
        if (filterGens[1] && checkGen2(newCry)) break;
        if (filterGens[2] && checkGen3(newCry)) break;
        if (filterGens[3] && checkGen4(newCry)) break;
        if (filterGens[4] && checkGen5(newCry)) break;
        if (filterGens[5] && checkGen6(newCry)) break;
        if (filterGens[6] && checkGen7(newCry)) break;
        if (filterGens[7] && checkGen8(newCry)) break;
        if (filterGens[8] && checkGen9(newCry)) break;

        // If the number fails all checks, generate a new number
      }

      // Concat a string of the random Pokemon
      let newUrl: string = "https://pokeapi.co/api/v2/pokemon/" + newCry + "/";
      setUrl(newUrl);
    }
  };

  // Get new cry using new url string
  useEffect(() => {
    if (url) {
      axios.get(url).then((res) => {
        // console.log(res);
        audioGame.volume = volume;
        // Sets the URL of the new Pokemon's cry to Legacy.
        if (legacyCry && res.data.cries.legacy) setCry(res.data.cries.legacy);
        // Sets the URL of the new Pokemon's cry to Latest.
        else setCry(res.data.cries.latest);

        // Some Pokemon have "-" in their name
        let name: string = res.data.species.name;
        if (
          [
            "ho-oh",
            "porygon-Z",
            "jangmo-o",
            "hakamo-o",
            "kommo-o",
            "wo-chien",
            "chien-pao",
            "ting-lu",
            "chi-yu",
          ].includes(name)
        ) {
          // Keep "-"
        } else {
          name = name.replace("-", " "); // replace "-" with " "
        }
        setCurrentPokemon(name); // Send the name of the new Pokemon to Game.tsx

        // Set the new Pokemon's name and sprite.
        setTimeout(() => {
          setSprite(res.data.sprites.front_default);
          if (legacyCry) {
            if (name === "charizard" || name === "rhyhorn") {
              name = "Charizard/Rhyhorn";
            } else if (name === "ditto" || name === "poliwag") {
              name = "Poliwag/Ditto";
            }
          }
          setPokemonAnswer(toTitleCase(name));
        }, TIMER);
      });
    }
  }, [url, audioGame, setCurrentPokemon]);

  // Play cry
  const playAudio = () => {
    if (cry) {
      console.log("PLAY");

      // Play
      audioGame.play();
    }
  };

  // Generate new cry if new game started or answer was correct.
  useEffect(() => {
    randomCry();
  }, [game, nextPokemon]);

  // ===============================================

  return (
    <div
      className="size-80 md:size-96 m-2
      bg-white dark:bg-gray-800
      grid justify-center content-center justify-items-center rounded-xl shadow"
    >
      <audio src={cry} controls hidden className="m-4" id="audioGame" />

      {!showResult && (
        <div>
          {/* LISTEN */}
          <button
            className="size-52 p-4 m-4 bg-green-600 rounded-xl text-white font-bold text-xl grid justify-center items-center
        hover:bg-green-700 active:bg-green-800
        transition ease-out duration-100"
            onClick={playAudio}
          >
            <div className="grid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                  clipRule="evenodd"
                />
              </svg>
              Listen
            </div>
          </button>

          {/* SKIP */}
          <button
            onClick={(e) => {
              // Clear streak, show result
              setStreak(0);
              setShowResult(true);
              setIncorrect(true);

              // Show Pokemon Answer for 1 sec
              setTimeout(() => {
                setShowResult(false);
                setIncorrect(false);
              }, TIMER);

              // Get new cry
              randomCry();
            }}
            className="bg-red-500 text-white font-bold text-xl p-4 m-4 w-52 h-16 rounded-xl flex justify-center items-center
        hover:bg-red-600 active:bg-red-700
        transition ease-out duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 mr-2"
            >
              <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
            </svg>
            Skip
          </button>
        </div>
      )}

      {/* --------------------- */}

      {/* CORRECT Pokemon Answer */}
      {showResult && correct && (
        <div className="animate-bump">
          <div
            id="pokemonSpriteResult"
            className="size-52 m-4 p-4 bg-green-600 rounded-xl grid justify-center items-center"
          >
            <img src={sprite} alt={pokemonAnswer} className="size-36" />
            {/* <h1>{pokemonName}</h1> */}
          </div>
          <div
            id="pokemonNameResult"
            className="w-52 h-16 m-4 bg-green-600 rounded-xl grid justify-center items-center"
          >
            <p className="text-xl font-bold text-white">{pokemonAnswer}</p>
          </div>
        </div>
      )}

      {/* WRONG Pokemon Answer */}
      {showResult && !correct && (
        <div className="animate-bump">
          <div
            id="pokemonSpriteResult"
            className="size-52 m-4 p-4 bg-red-500 rounded-xl grid justify-center items-center"
          >
            <img src={sprite} alt={pokemonAnswer} className="size-36" />
            {/* <h1>{pokemonName}</h1> */}
          </div>
          <div
            id="pokemonNameResult"
            className="w-52 h-16 m-4 bg-red-500 rounded-xl grid justify-center items-center"
          >
            <p className="text-xl font-bold text-white">{pokemonAnswer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCry;
