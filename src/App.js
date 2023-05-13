// import { Navbar } from "react-bootstrap";
// import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "react-scroll-to-top";
import Oferta from "./pages/Oferta.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
        </Routes>
        <Footer />
        <ScrollToTop smooth color="#2cb34a" />
      </BrowserRouter>
    </div>
  );
}

export default App;
