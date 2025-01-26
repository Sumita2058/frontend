import "./App.css";
import { Footer, Hero, Navbar } from "./components/import";
function App() {
  return (
      <div
        className="bg-white dark:bg-black dark:text-white text:black
    overflow-x-hidden"
      >
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <Navbar />
        </div>
        <div className="mt-14">
          <Hero />
          <Footer />
        </div>
      </div>
  );
}

export default App;
