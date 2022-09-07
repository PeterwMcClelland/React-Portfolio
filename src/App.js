import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact"

function App() {

  return (
    <div>
      <Nav></Nav>
      
      <main>
      <About></About>
      </main>
      <footer>
        <Contact></Contact>
      </footer>
    </div>
  );
}

export default App;