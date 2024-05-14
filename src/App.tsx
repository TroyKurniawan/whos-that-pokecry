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
  const [gen1, setGen1] = useState(true);
  const [gen2, setGen2] = useState(true);
  const [gen3, setGen3] = useState(true);
  const [gen4, setGen4] = useState(true);
  const [gen5, setGen5] = useState(true);
  const [gen6, setGen6] = useState(true);
  const [gen7, setGen7] = useState(true);
  const [gen8, setGen8] = useState(true);
  const [gen9, setGen9] = useState(true);

  // ==============================

  return (
    <>
      {/* Page */}
      <div className="h-screen bg-gray-300">
        {/* Practice */}
        <div className={practice ? "visible animate-fadeIn" : " hidden"}>
          <Practice closePractice={setPractice} />
        </div>

        {/* Settings */}
        <div className={settings ? "visible animate-fadeIn" : " hidden"}>
          <Settings
            closeSettings={setSettings}
            filterGen1={setGen1}
            filterGen2={setGen2}
            filterGen3={setGen3}
            filterGen4={setGen4}
            filterGen5={setGen5}
            filterGen6={setGen6}
            filterGen7={setGen7}
            filterGen8={setGen8}
            filterGen9={setGen9}
          />
        </div>

        <Header />

        <MainMenu
          callbackPractice={setPractice}
          callbackSettings={setSettings}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
