import React from 'react'

function Projects (){

    return (
<div class="grid-with-sidebar about-me">
        <div>
            <h2>About Me</h2>
            <p>
                I'm Peter McClelland,
            </p>
            
<p>
I am a full stack web Developer based in Austin TX. I recently graduated from UT Austins coding bootcamp program. The program was very rewarding and I’m looking forward to building off what I have learned. I would like to become a part of a company where I can continue to learn and develop my skills. 
</p>

<p>
    I'm currently available for freelance work. Contact information is below if you would like to connect!  
</p>

           <div class="education"> 
            <h2>Education/Resume</h2>
                <p class='utlink'>
                    <ul>
                        <li>
                <i class="fa-solid fa-link"></i><a class='utlink' href='https://docs.google.com/document/d/e/2PACX-1vQijtfi9bCCIYd63dWPurpHlJyppLnMrMYdc4TbpZxEY9CT7cERLlz_6DqsS9ZGDx_AMyJaGShvKceG/pub' target="blank">UT Austin</a>
                </li>
                <li>
                <i class="fa-solid fa-link"></i><a class='utlink' href="https://docs.google.com/document/d/e/2PACX-1vTHyQnEMC_A6BlEurGzysJFgRdvdWgN0v4MluiqfVg0CXVhuGbvMhb4JljiIBHgbFc-_yL1oxLMhSy5/pub" target="blank"> Resume</a>
                </li>
                </ul>
            </p>
            </div>
            
            <h2>Languages / Programs</h2>
            <p class="languages">
                <ul>
                <li>Javascript</li>
                <li>CSS</li>
                <li>mySQL</li>
                <li>REACT</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Github</li>
                <li>MERN</li>
                <li>MVP</li>
                <li>JSON</li>
                <li>JQuery</li>
                <li>MongoDB</li>
                </ul>
            </p>
        </div>

        <section className="my-5" >
          <h1 href="#projects" id="Projects">Projects</h1>
          
          <div class="projects">

<a class="work-text"  href="https://peterwmcclelland.github.io/TileBar-Espresso/" target="blank">
<div class="one"></div>
</a>

<div class="grid-portfolio">
    <div>
        <a class="work-text" href="https://secret-coast-34340.herokuapp.com/" target="blank">
        <div class="two"></div>
        </a>
    </div>

    <div>
        <a class="work-text" href="https://budget-tracker55.herokuapp.com/" target="blank">
        <div class="three"></div>
        </a>
    </div>

    <div>
        <a class="work-text" href="https://peterwmcclelland.github.io/run-buddy/" target="blank">
        <div class="four"></div>
        </a>

    </div>

    <div>
        <a class="work-text" href="https://peterwmcclelland.github.io/Taskmaster-Pro/" target="blank">
        <div class="five"></div>
        </a>
    </div>
    
</div>
</div>
</section>


</div>
          
        
      )
}

export default Projects