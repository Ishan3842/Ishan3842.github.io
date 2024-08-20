import "./App.css";
import Nav from "./components/Nav";
import StarsCanvas from "./components/StarsCanvas";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Leadership from "./components/leadership"; // Import the new Leadership component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechnicalSkills from "./components/TechnicalSkills";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="relative z-0 bg-black w-screen h-screen">
        <Home />
        <StarsCanvas />
      </div>
      <About />
      <TechnicalSkills />
      <Experience />
      <Works />
      <Leadership />
      <div className="relative z-0 bg-black px-4 py-8">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default App;
