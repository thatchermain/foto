// import { Navbar } from "react-bootstrap";
// import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "react-scroll-to-top";
import Oferta from "./pages/Oferta.jsx";
import Dystrybucja from "./pages/Dystrybucja.jsx";
import Instalacje from "./pages/oferta/Instalacje.jsx";
import Pompy from "./pages/oferta/Pompy.jsx";
import Piece from "./pages/oferta/Piece.jsx";
import Ladowarki from "./pages/oferta/Ladowarki.jsx";
import Magazyny from "./pages/oferta/Magazyny.jsx";
import Sprzedaz from "./pages/oferta/Sprzedaz.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Download from "./pages/Download.jsx";
import Blog from "./pages/Blog.jsx";
import Realizacje from "./pages/Realizacje.jsx";
import Praca from "./pages/Praca.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route
            path="/oferta/instalacje-fotowoltaiczne"
            element={<Instalacje />}
          />
          <Route path="/oferta/pompy-ciepla" element={<Pompy />} />
          <Route path="/oferta/piece-jonowe" element={<Piece />} />
          <Route path="/oferta/ladowarki-samochodowe" element={<Ladowarki />} />
          <Route path="/oferta/magazyny-energii" element={<Magazyny />} />
          <Route path="/oferta/sprzedaz-energii" element={<Sprzedaz />} />
          <Route path="/dystrybucja" element={<Dystrybucja />} />
          <Route path="/oferty_pracy" element={<Praca />} />
          <Route path="/realizacje" element={<Realizacje />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/do_pobrania" element={<Download />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
        <ScrollToTop smooth color="#2cb34a" />
      </BrowserRouter>
    </div>
  );
}

export default App;
