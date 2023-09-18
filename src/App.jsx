import "./App.css";
import * as bootstrap from "bootstrap";
import "./scss/styles.scss";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";

function App() {
  return (
    <>
      <Navbar className="navbar" />
      <Hero className="hero" />
      <Content1 />
      <Content2 />
    </>
  );
}

export default App;
