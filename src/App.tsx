import { useState } from "react";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Game from "./Game";
import Footer from "./Footer";
import Practice from "./Practice";
import Settings from "./Settings";

// Master timer to set how long results appear for
export const TIMER = 1900;

// Check if the user agent string contains "iPhone", "iPad", or "iPod"
export const iOSCheck = /iPhone|iPad|iPod/.test(navigator.userAgent);

function App() {
  // Generation Filter Bools
  const [filterGen1, setFilterGen1] = useState(true);
  const [filterGen2, setFilterGen2] = useState(true);
  const [filterGen3, setFilterGen3] = useState(true);
  const [filterGen4, setFilterGen4] = useState(true);
  const [filterGen5, setFilterGen5] = useState(true);
  const [filterGen6, setFilterGen6] = useState(true);
  const [filterGen7, setFilterGen7] = useState(true);
  const [filterGen8, setFilterGen8] = useState(true);
  const [filterGen9, setFilterGen9] = useState(true);

  // Array of setStates
  const setFilterGens = [
    setFilterGen1,
    setFilterGen2,
    setFilterGen3,
    setFilterGen4,
    setFilterGen5,
    setFilterGen6,
    setFilterGen7,
    setFilterGen8,
    setFilterGen9,
  ];

  // Array of states
  const filterGens = [
    filterGen1,
    filterGen2,
    filterGen3,
    filterGen4,
    filterGen5,
    filterGen6,
    filterGen7,
    filterGen8,
    filterGen9,
  ];

  // Legacy cry for game
  const [legacyCry, setLegacyCry] = useState(false);

  // Switch to mainmenu, game, practice, and setting view
  const [mainmenu, setMainmenu] = useState(true);
  const [game, setGame] = useState(false);
  const [practice, setPractice] = useState(false);
  const [settings, setSettings] = useState(false);
  const setWindow = [setMainmenu, setGame, setPractice, setSettings];

  // Light/Dark Themes
  const darkCache = localStorage.getItem("darkCache");

  // Volume
  // (0.3 is the current max volume level, see VolumeSlider.tsx, line 15)
  const [volume, setVolume] = useState(0.15);

  // ==============================

  return (
    <div id="page" className={darkCache!}>
      <div
        className="h-screen w-screen fixed -z-50
      bg-gray-300 dark:bg-gray-900"
      />

      {/* Page */}
      <div className="h-screen w-screen grid content-between justify-items-center">
        <Header setVolume={setVolume} />

        <div className="h-20 w-screen" />

        {/* Add fade in loading */}
        <div className="animate-load flex items-center">
          {/* Main Menu */}
          {mainmenu && <MainMenu setWindow={setWindow} />}

          {/* Game Itself */}
          {game && (
            <Game
              legacyCry={legacyCry}
              filterGens={filterGens}
              setWindow={setWindow}
              game={game}
              volume={volume}
            />
          )}

          {/* Practice */}
          {practice && <Practice setWindow={setWindow} volume={volume} />}

          {/* Settings */}
          {settings && (
            <Settings
              setWindow={setWindow}
              setFilterGens={setFilterGens}
              filterGens={filterGens}
              setLegacyCry={setLegacyCry}
              legacyCry={legacyCry}
            />
          )}
        </div>

        {/* Background */}
        <div
          className="h-screen w-screen bg-pokeball fixed -z-10 bg-no-repeat bg-center 
          opacity-[3%] animate-spinInLight
          dark:invert dark:opacity-[1%] dark:animate-spinInDark"
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
