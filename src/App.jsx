import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Manifiesto from "./pages/Manifiesto";
import TheRise from "./pages/programs/TheRise";
import Initium from "./pages/programs/Initium";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="pt-24 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/the-rise" element={<TheRise />} />
          <Route path="/programs/initium" element={<Initium />} />
          <Route path="/training" element={<Training />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
