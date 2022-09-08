import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
const [categories] = useState([
    { name: 'About Me', description: 'About Me' },
    { name: 'Projects', description: 'Projects' },
    { name: 'Contact', description: 'Contact Info'}
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            
          </span>{" "}
          Peter McClelland
        </a>
        <p>Full Stack Web Developer</p>
      </h2>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              
            </a>
          </li>
          
          <li href="#contact">
            
          </li>

          <li>
            
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                  {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;