import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <Projects></Projects>
      </main>
      <footer>
        <Contact></Contact>
      </footer>
    </div>
  );
}

export default App;