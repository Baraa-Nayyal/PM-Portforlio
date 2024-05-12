import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
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
      {/* <div className="hello"></div> */}
      <div className="fixed top-0 -z-[10] h-full w-full ">
        <div className=" bg-[url('./assests/background.png')] bg-cover h-full "></div>
        {/* <div
          className=" bg-[url('./assests/background.png')] absolute top-0 z-[-2] h-screen w-screen 
        bg-neutral-950 bgs-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div> */}
      </div>
      <Navbar />
      <Home />
      <About />
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
