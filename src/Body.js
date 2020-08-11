import React from "react";
import Zoom from "./Zoom";

function Body() {
  return (
    <div className="row body">
      <article class="col-3">
        <h2>Background</h2>
        <p>
          <Zoom />
          Hello there, and thank you for visiting my website! I am a web
          developer. The point of this website is to share a little bit about
          myself while showcasing my front end web development skills. Please
          reach out to me if you have any questions about me and any of the
          services I offer.
        </p>
      </article>
    </div>
  );
}

export default Body;
