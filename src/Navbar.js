import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Links</a>
          <ul>
            <li>Resume</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </li>
        <li>
          <a href="">Skills</a>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Ruby on Rails</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
