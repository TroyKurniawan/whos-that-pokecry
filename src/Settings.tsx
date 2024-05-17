import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";

type SettingsProps = {
  closeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterGens: React.Dispatch<React.SetStateAction<boolean>>[];
  filterGens: boolean[];
  legacyCry: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings = ({
  closeSettings,
  setFilterGens,
  filterGens,
  legacyCry,
}: SettingsProps) => {
  return (
    <div className="h-screen w-screen fixed grid justify-center content-center">
      {/* Dim background */}
      <div
        className="h-screen w-screen fixed bg-black opacity-50 -z-10"
        onClick={(e) => closeSettings(false)}
      />

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
          onClick={(e) => {
            for (const check of filterGens) {
              if (check) {
                closeSettings(false);
                return;
              }
            }
            alert("Please select at least one generation!");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">Settings</h1>

        <div className="my-2 border-b" />

        {/* Scroll Container */}
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          {/* Filter Generations */}
          <div>
            <h2 className="text-start font-bold text-lg my-1">
              Filter Generations
            </h2>
            {/* Switches */}
            <div className="justify-center items-center">
              <ToggleSwitch
                callback={setFilterGens[0]}
                title={"Generation 1"}
                subtitle={"Bulbasaur - Mew"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[1]}
                title={"Generation 2"}
                subtitle={"Chikorita - Celebi"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[2]}
                title={"Generation 3"}
                subtitle={"Treecko - Deoxys"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[3]}
                title={"Generation 4"}
                subtitle={"Turtwig - Arceus"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[4]}
                title={"Generation 5"}
                subtitle={"Victini - Genesect"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[5]}
                title={"Generation 6"}
                subtitle={"Chespin - Volcanion"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[6]}
                title={"Generation 7"}
                subtitle={"Rowlet - Melmetal"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[7]}
                title={"Generation 8"}
                subtitle={"Grookey - Enamorus"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png"
                }
              />
              <ToggleSwitch
                callback={setFilterGens[8]}
                title={"Generation 9"}
                subtitle={"Sprigatito - Pecharunt"}
                init={true}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png"
                }
              />
            </div>
          </div>

          <div className="my-2 border-b" />

          {/* Sound */}
          <div>
            <h2 className="text-start font-bold text-lg my-1">Sound</h2>
            <div className="pb-2 grid justify-center items-center content-center">
              <ToggleSwitch
                callback={legacyCry}
                title={"Legacy cries"}
                subtitle={
                  "When available, play original cries made before generation 6's update."
                }
                init={false}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gb-sounds.png"
                }
              />
              <div className="flex justify-center items-center my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-gray-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>

                <p className="text-xs text-start w-64 text-gray-500">
                  Note that Charizard/Rhyhorn's legacy cries and Poliwag/Ditto's
                  legacy cries are the exact same. Both respective answers will
                  be valid.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="my-2 border-b" /> */}

          {/* Gameplay */}
          {/* <div>
            <h2 className="text-start font-bold text-lg my-1">Gameplay</h2>
            <div className="pb-2 grid justify-center items-center content-center">
              <ToggleSwitch
                callback={}
                title={"Multiple choice mode"}
                subtitle={"Play game with four options."}
                init={false}
                icon={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-band.png"
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
