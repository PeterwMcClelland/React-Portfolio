import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";





import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: '<G-MGEWNKRM0D>'
}
TagManager.initialize(tagManagerArgs)

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