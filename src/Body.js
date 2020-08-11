import React from "react";
import Zoom from "./Zoom";

function Body() {
  return (
    <div className="row clouds main">
      <h2 className="underline">Background</h2>
      <article class="col-3">
        <p>
          <Zoom />
          Hello, and thank you for visiting my website! I am a web developer and
          the purpose of this website is to showcase my web development skills.
          The dropdown menu above contains many links to many of my projects.
          Feel free to look through my code and see what projects you find
          interesting!
        </p>
        <p>
          In addition, every animation on this webpage was created with CSS.
          There is a lot of functionality built into CSS with animations and
          transitions, and I placed some examples throughout the page to show
          you what's possible even without any JavaScript!
        </p>
        <p>
          Please reach out to me if you have any questions about me and any of
          the services I offer. I will do my best to get back to you in a timely
          manner.
        </p>
      </article>
    </div>
  );
  /*
  return (
    <div className="row clouds">
        <div className="row main">
          <h2 className="underline">Background</h2>
        </div>
        <div className="row content">
        </div>
      </div>
    </div>
  );
  */
}

export default Body;
