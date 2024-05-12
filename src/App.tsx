import { useState, useEffect } from "react";
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
        {practice && <Practice callback={setPractice} />}

        <Header />
        <MainMenu callback={setPractice} />
        <Footer />
      </div>
    </>
  );
}

export default App;
