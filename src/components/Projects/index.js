import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import Resume from '../../assets/PDF/Peter McClelland Resume 2.pdf';
import UT from '../../assets/PDF/McClelland_Peter_TCH-5003-052.pdf';



function Projects (){

    return (
<div class="grid-with-sidebar about-me">
        <div>
            <h2>About Me</h2>
            <p>
                I'm Peter McClelland,
            </p>
            
<p>
I am a full stack web Developer based in Austin TX. I recently graduated from UT Austins coding bootcamp program. The program was very rewarding and I am looking forward to building off what I have learned. I would like to become a part of a company where I can continue to learn and develop my skills. 
</p>

<p>
    I'm currently available for freelance work. Contact information is below if you would like to connect!  
</p>

           <div class="education"> 
            <h2>Education/Resume</h2>
                <p class='utlink'>
                    <ul>
                        <li>
                            <FontAwesomeIcon size='sm' icon={faFile} /><a class='utlink' href={Resume} target="blank"> Resume</a>
                        </li>
                        <li>
                            <FontAwesomeIcon size='sm' icon={faFile} /><a class='utlink' href={UT} target="blank"> UT Austin Certification</a>
                        </li>
                    </ul>
                </p>
            </div>
            
            <h2>Languages / Programs</h2>

            <p class="languages">
                <ul>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>REACT</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Github</li>
                <li>Heroku</li>
                <li>MERN</li>
                <li>MVP</li>
                <li>JSON</li>
                <li>JQuery</li>
                </ul>
            </p>
        </div>

        <section className="my-5" >
          {/* <h1 href="#projects" id="Projects">Projects</h1> */}
          
          <div class="projects"><h1><i class="fa-solid fa-link fa-2xs"></i><a class='utlink' href='https://github.com/PeterwMcClelland' target="blank">Projects</a></h1>

<a class="work-text" href="https://newport-house.herokuapp.com/" target="blank">
<div class="one">
<div class="tooltip"><i class="fa-solid fa-circle-info fa-xl"></i>
  <span class="tooltiptext">Private beach house rental in Newport, OR.
        <p class="builtwithtext">Built with: React, HTML, CSS, JavaScript.</p>
        </span>
</div>
</div>

</a>
<a class="githubicon" href="https://github.com/PeterwMcClelland/Beach-House" target='blank'>
<i class="fa-brands fa-github fa-xs"></i>
    Repository</a>
    

    
<div class="grid-portfolio">
    <div>
        <a class="work-text" href="https://reactthisweekend.herokuapp.com/" target="blank">
        <div class="two">
        <div class="tooltip"><i class="fa-solid fa-circle-info fa-xl"></i>
        <span class="tooltiptext">Portland skate spot guide.
        <p class="builtwithtext">Built with: React, HTML, CSS, JavaScript and Fontawesome.</p>
        </span>
</div>
        </div>
        </a>
        <a class="githubicon" href="https://github.com/PeterwMcClelland/React-This-Weekend" target='blank'>
        <i class="fa-brands fa-github fa-xs"></i>Repository
            </a>
    </div>

    <div>
        <a class="work-text" href="https://github.com/PeterwMcClelland/Wine-List" target="blank">
        <div class="three">
        <div class="tooltip"><i class="fa-solid fa-circle-info fa-xl"></i>
                <span class="tooltiptext">(In Development) This is a wine Index that provides all the wines information using CRUD operations.
            <p class="builtwithtext">Built with: Mongodb, Express, React, Node.js, JavaScript, HTML & CSS.</p>
        </span>
</div>
        </div>
        </a>
        <a class="githubicon" href="https://github.com/PeterwMcClelland/Wine-List" target='blank'>
        <i class="fa-brands fa-github fa-xs"></i>Repository
            </a>
    </div>

    <div>
        <a class="work-text" href="https://react-tilebarespresso.herokuapp.com/" target="blank">
        <div class="four">
            <div class="tooltip"><i class="fa-solid fa-circle-info fa-xl"></i>
            <span class="tooltiptext">This is a template that can be used for a coffee catering company.
            <p class="builtwithtext">Built with: React, HTML, CSS, Javascript, Heroku.</p>
        </span>
    </div>
        </div>
        </a>
        <a class="githubicon" href="https://github.com/PeterwMcClelland/React-TileBar-Espresso" target='blank'>
        <i class="fa-brands fa-github fa-xs"></i>Repository
            </a>
    </div>

    <div>
        <a class="work-text" href="https://github.com/PeterwMcClelland/Video-Game-Chats" target="blank">
        <div class="five">
            <div class="tooltip"><i class="fa-solid fa-circle-info fa-xl"></i>
                <span class="tooltiptext">(In Development) This project is a gaming chat room, just create an account and start chating.
            <p class="builtwithtext">Built with: Javascript, Node, Express, mySQL, MVC.</p>
        </span>
    </div>
        </div>
        </a>
        <a class="githubicon" href="https://github.com/PeterwMcClelland/Video-Game-Chats" target='blank'>
        <i class="fa-brands fa-github fa-xs"></i>Repository
            </a>
    </div>
    
</div>
</div>
</section>


</div>
          
        
      )
}

export default Projects