import React from "react";

function Nav() {

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
    </header>
  );
}

export default Nav;