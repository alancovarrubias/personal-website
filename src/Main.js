import React from "react";
import Zoom from "./Zoom";

function Main() {
  return (
    <main className="row">
      <h2 className="underline">About This Website</h2>
      <article className="col-">
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
          Please reach out to me if you have any questions about me or any of
          the services I offer, and I will get back to you as soon as I can!
        </p>
      </article>
    </main>
  );
}

export default Main;
