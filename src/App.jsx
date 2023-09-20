import "./App.css";
import * as bootstrap from "bootstrap";
import "./scss/styles.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar className="navbar" />
      <Hero className="hero" />
      <Content1 />
      <Content2 />
      <Footer />
    </>
  );
}

export default App;
