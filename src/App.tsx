import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Page */}
      <div className="h-screen bg-gray-300">
        <Header />
        <Game />
        <Footer />
      </div>
    </>
  );
}

export default App;
