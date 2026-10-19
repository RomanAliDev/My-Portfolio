import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackgroundAnimation from "./Components/BackgroundAnimation";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] font-sans text-white scroll-smooth">
      <BackgroundAnimation />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
