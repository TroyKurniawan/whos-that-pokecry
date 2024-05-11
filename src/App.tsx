import Header from "./Header";
import MainMenu from "./MainMenu";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Page */}
      <div className="h-screen bg-gray-300">
        <Header />
        <MainMenu />
        <Footer />
      </div>
    </>
  );
}

export default App;
