import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Clients from "./pages/Clients";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";
// import "./global.css";

function App() {
  return (
    <>
      <div className=" bg-[url('./assests/background.png')] fixed top-0 -z-[10] h-full w-full bg-cover"></div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Clients />
      <Reviews />
      {/* <Routes>
        <Home />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes> */}
      <Footer />
    </>
  );
}
export default App;
