import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";

type SettingsProps = {
  closeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  filterGens: React.Dispatch<React.SetStateAction<boolean>>[];
};

const Settings = ({ closeSettings, filterGens }: SettingsProps) => {
  return (
    // Dim background
    <div className="fixed size-full bg-black bg-opacity-50 grid justify-center content-center z-10">
      {/* Container */}
      <div className="grid justify-center content-center w-[28rem] h-[48rem] bg-white rounded-xl text-center p-4">
        {/* X button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 absolute stroke-gray-500 hover:stroke-gray-600 cursor-pointer justify-self-end grid"
          onClick={(e) => closeSettings(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        {/* Header */}
        <div className="pb-4 border-b">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        {/* Contents */}
        <h2 className="text-start font-bold text-lg my-2">
          Filter Generations
        </h2>
        {/* Switches */}
        <div className="justify-center items-center">
          <ToggleSwitch
            callback={filterGens[0]}
            title={"Generation 1"}
            subtitle={"Bulbasaur - Mew"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[1]}
            title={"Generation 2"}
            subtitle={"Chikorita - Celebi"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[2]}
            title={"Generation 3"}
            subtitle={"Treecko - Deoxys"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[3]}
            title={"Generation 4"}
            subtitle={"Turtwig - Arceus"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[4]}
            title={"Generation 5"}
            subtitle={"Victini - Genesect"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[5]}
            title={"Generation 6"}
            subtitle={"Chespin - Volcanion"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[6]}
            title={"Generation 7"}
            subtitle={"Rowlet - Melmetal"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[7]}
            title={"Generation 8"}
            subtitle={"Grookey - Enamorus"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png"
            }
          />
          <ToggleSwitch
            callback={filterGens[8]}
            title={"Generation 9"}
            subtitle={"Sprigatito - Pecharunt"}
            init={true}
            icon={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
