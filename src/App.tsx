import { useState } from "react";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Game from "./Game";
import Footer from "./Footer";
import Practice from "./Practice";
import Settings from "./Settings";

function App() {
  // Practice and Settings Window Bools
  const [practice, setPractice] = useState(false);
  const [settings, setSettings] = useState(false);

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

  // Switch to game view
  const [toggleGame, setToggleGame] = useState(false);

  // Volume
  // (0.3 is the current max volume level, see VolumeSlider.tsx, line 15)
  const [volume, setVolume] = useState(0.15);

  // ==============================

  return (
    <>
      {/* Practice */}
      <div className={practice ? "visible animate-fadeIn" : "hidden"}>
        <Practice closePractice={setPractice} volume={volume} />
      </div>

      {/* Settings */}
      <div className={settings ? "visible animate-fadeIn" : "hidden"}>
        <Settings
          closeSettings={setSettings}
          setFilterGens={setFilterGens}
          filterGens={filterGens}
          legacyCry={setLegacyCry}
        />
      </div>

      <div className="h-screen w-screen fixed bg-gray-300 -z-50" />

      {/* Page */}
      <div className="h-screen w-screen grid content-between justify-items-center">
        <Header setVolume={setVolume} />

        <div className="h-16 w-screen"></div>

        {/* Add fade in loading */}
        <div className="animate-load">
          {/* Main Menu */}
          {!toggleGame && (
            <MainMenu
              callbackPractice={setPractice}
              callbackSettings={setSettings}
              setToggleGame={setToggleGame}
            />
          )}

          {/* Game Itself */}
          {toggleGame && (
            <Game
              legacyCry={legacyCry}
              filterGens={filterGens}
              setToggleGame={setToggleGame}
              toggleGame={toggleGame}
              volume={volume}
            />
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
