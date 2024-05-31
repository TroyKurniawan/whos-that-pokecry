import { useState } from "react";
import SearchResultContainer from "./SearchResultContainer";

type PlayerInputProps = {
  callbackPlayerAnswer: React.Dispatch<React.SetStateAction<string>>;
};

const PlayerInput = ({ callbackPlayerAnswer }: PlayerInputProps) => {
  const [currentInput, setCurrentInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className="relative flex">
      <SearchResultContainer
        input={currentInput}
        callbackPlayerAnswer={callbackPlayerAnswer}
        focus={inputFocus}
      />

      {/* Magnifying Glass SVG */}
      <div
        className="absolute m-4 p-4
        pl-[1.3rem]
        md:pl-[1.2rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-30 size-5 md:size-auto"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>

      {/* Input Field */}
      <input
        maxLength={12}
        placeholder="Search Pokémon..."
        type="search"
        id="playerInput"
        autoComplete="off"
        className="w-80 text-sm
        md:w-96 md:text-base
        m-4 pl-14 p-4 rounded-xl shadow"
        onChange={(e) =>
          setCurrentInput(
            (document.getElementById("playerInput") as HTMLInputElement)!.value
          )
        }
        onFocus={(e) => setInputFocus(true)}
        onBlur={(e) => setInputFocus(false)}
      ></input>
    </div>
  );
};

export default PlayerInput;
