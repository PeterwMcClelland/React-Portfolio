import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Contact() {
    const [categories] = useState([
        // { name: 'GitHub', description: 'GitHub link' },
        // { name: '971-205-4928', description: 'Phone number'}
      ]);
      const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <section className="my-5" >
          <h1 id="Contact">Contact</h1>
          <div className="my-2">
            <footer>
            <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="https://github.com/PeterwMcClelland" target='blank'>
                <lu>
                    GitHub
              </lu>
            </a>
            
          <a href="https://www.linkedin.com/in/peter-mcclelland-065450230/" target='blank'>
              <lu>
                  Linked In
              </lu>
          </a>
            <span></span>
          </li>
        
          {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && ''
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
          </footer>
          </div>
        </section>
      )
}

export default Contact

