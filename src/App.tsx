import { useState } from "react";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Footer from "./Footer";
import Practice from "./Practice";

function App() {
  const [practice, setPractice] = useState(false);

  // ==============================

  return (
    <>
      {/* Page */}
      <div className="h-screen bg-gray-300">
        {/* Practice */}
        <div className={practice ? "visible animate-fadeIn" : " hidden"}>
          <Practice callback={setPractice} />
        </div>
        <Header />
        <MainMenu callback={setPractice} />
        <Footer />
      </div>
    </>
  );
}

export default App;
