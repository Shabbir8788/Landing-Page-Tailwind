import "./App.css";
import Calling from "./components/Calling";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import State from "./components/State";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <State />
      <Calling />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
