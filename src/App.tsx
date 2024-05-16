import { useState } from "react";
import Header from "./Header";
import MainMenu from "./MainMenu";
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

  // Legacy cry for game
  const [legacyCry, setLegacyCry] = useState(false);

  // ==============================

  return (
    <>
      {/* Practice */}
      <div className={practice ? "visible animate-fadeIn" : "hidden"}>
        <Practice closePractice={setPractice} />
      </div>

      {/* Settings */}
      <div className={settings ? "visible animate-fadeIn" : "hidden"}>
        <Settings
          closeSettings={setSettings}
          filterGens={setFilterGens}
          legacyCry={setLegacyCry}
        />
      </div>

      {/* Page */}
      <div className="h-screen bg-gray-300 grid content-between">
        <Header />

        <MainMenu
          callbackPractice={setPractice}
          callbackSettings={setSettings}
          legacyCry={legacyCry}
          callbackFilterGens={setFilterGens}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
