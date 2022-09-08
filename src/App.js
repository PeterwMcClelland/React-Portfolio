import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact"
import Projects from "./components/Projects";

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'About me'},
    { name: 'Projects', description: 'My Projects'},
    { name: 'Contact', description: 'Contact Info'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      
      <main>
      <About currentCategory={currentCategory}></About>
      <Projects></Projects>
      </main>
      <footer>
        <Contact></Contact>
      </footer>
    </div>
  );
}

export default App;