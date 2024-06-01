import { iOSCheck } from "./App";
import ToggleSwitch from "./ToggleSwitch";

type SettingsProps = {
  setWindow: React.Dispatch<React.SetStateAction<boolean>>[];
  setFilterGens: React.Dispatch<React.SetStateAction<boolean>>[];
  filterGens: boolean[];
  setLegacyCry: React.Dispatch<React.SetStateAction<boolean>>;
  legacyCry: boolean;
};

const Settings = ({
  setWindow,
  setFilterGens,
  filterGens,
  setLegacyCry,
  legacyCry,
}: SettingsProps) => {
  // Display/hide game window
  const toggleSettings = () => {
    setWindow[3]((prevSettings) => !prevSettings);
    setWindow[0]((prevMainmenu) => !prevMainmenu);
  };

  // Make sure at least one generation is selected in the filters
  const checkGenerationFilter = () => {
    for (const check of filterGens) {
      if (check) {
        toggleSettings();
        return;
      }
    }
    alert("Please select at least one generation!");
  };

  // Changes theme
  const changeTheme = () => {
    const page = document.getElementById("page");
    if (page?.classList.contains("dark")) {
      page?.classList.remove("dark");
      localStorage.setItem("darkCache", "light");
    } else {
      page?.classList.add("dark");
      localStorage.setItem("darkCache", "dark");
    }
  };

  // ==========================================

  return (
    <div className="grid justify-items-center animate-bump">
      {/* Container */}
      <div
        className="w-[20rem] h-[28rem]
      md:w-[28rem] md:h-[38rem] dark:bg-gray-800 dark:text-white 
      grid justify-center content-center bg-white rounded-xl text-center p-4 shadow"
      >
        {/* Header */}
        <h1 className="text-xl md:text-2xl font-bold mb-2">Settings</h1>

        <div className="mt-2 border-b dark:border-gray-700" />

        {/* Scroll Container */}
        <div className="overflow-y-auto overflow-x-hidden w-[20rem] md:w-[26rem] grid justify-center">
          <div className="w-64 md:w-80">
            {/* Filter Generations */}
            <div>
              <h2 className="text-base md:text-lg text-start font-bold my-2">
                Filter generations
              </h2>
              {/* Switches */}
              <div className="justify-center items-center">
                <ToggleSwitch
                  callback={setFilterGens[0]}
                  title={"Generation 1"}
                  subtitle={"Bulbasaur - Mew"}
                  init={filterGens[0]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[1]}
                  title={"Generation 2"}
                  subtitle={"Chikorita - Celebi"}
                  init={filterGens[1]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[2]}
                  title={"Generation 3"}
                  subtitle={"Treecko - Deoxys"}
                  init={filterGens[2]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[3]}
                  title={"Generation 4"}
                  subtitle={"Turtwig - Arceus"}
                  init={filterGens[3]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[4]}
                  title={"Generation 5"}
                  subtitle={"Victini - Genesect"}
                  init={filterGens[4]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[5]}
                  title={"Generation 6"}
                  subtitle={"Chespin - Volcanion"}
                  init={filterGens[5]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[6]}
                  title={"Generation 7"}
                  subtitle={"Rowlet - Melmetal"}
                  init={filterGens[6]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[7]}
                  title={"Generation 8"}
                  subtitle={"Grookey - Enamorus"}
                  init={filterGens[7]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png"
                  }
                  enable={true}
                />
                <ToggleSwitch
                  callback={setFilterGens[8]}
                  title={"Generation 9"}
                  subtitle={"Sprigatito - Pecharunt"}
                  init={filterGens[8]}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png"
                  }
                  enable={true}
                />
              </div>
            </div>

            <div className="my-2 border-b dark:border-gray-700" />

            {/* Sound */}
            <div>
              <h2 className="text-base md:text-lg text-start font-bold my-2">
                Sound
              </h2>
              <div className="pb-2 grid justify-center items-center place-items-center content-center">
                <ToggleSwitch
                  callback={setLegacyCry}
                  title={"Legacy cries"}
                  subtitle={
                    !iOSCheck
                      ? "When available, play original cries made before generation 6's update."
                      : "Legacy mode only available for non-iOS devices."
                  }
                  init={legacyCry}
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/gb-sounds.png"
                  }
                  enable={iOSCheck ? false : true}
                />
                <div className="w-60 md:w-80 flex justify-center items-center my-2">
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

                  <p className=" text-[0.6rem] md:text-xs text-start w-64 text-gray-500 dark:text-gray-400">
                    Note that Charizard/Rhyhorn's legacy cries and
                    Poliwag/Ditto's legacy cries are the exact same. Both
                    respective answers will be valid.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-2 border-b dark:border-gray-700" />

            {/* Theme */}
            <div>
              <h2 className="text-base md:text-lg text-start font-bold my-2">
                Theme
              </h2>
              <div className="pb-2 grid justify-center items-center place-items-center content-center">
                <ToggleSwitch
                  callback={changeTheme}
                  title={"Dark mode"}
                  subtitle={""}
                  init={
                    document.getElementById("page")?.classList.contains("dark")
                      ? true
                      : false
                  }
                  icon={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/black-glasses.png"
                  }
                  enable={true}
                />
              </div>
            </div>
          </div>

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
      {/* Exit */}
      <button
        className="w-24 m-4 p-2 border rounded-xl  text-lg
        border-red-500 text-red-500 
        hover:bg-red-500 hover:text-white
        active:bg-red-600 active:border-red-600 active:text-white
          transition ease-out duration-100
          flex content-center justify-center items-center"
        onClick={checkGenerationFilter}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 mr-1"
        >
          <path
            fillRule="evenodd"
            d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        Exit
      </button>
    </div>
  );
};

export default Settings;
