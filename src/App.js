import React from "react";
import "./App.css";
import Image from "./Image";

function App() {
  const bio = {
    paragraph: `
      Hello there, and thank you for visiting my website! My name is Alan Covarrubias and I am a web developer.
      The point of this website is to share a little bit about myself while showcasing my front end web development skills.
      Please reach out to me if you have any questions about me and any of the services I offer.
    `,
    className: "me",
    src: "me.jpg",
  };
  const interests = [
    {
      className: "bob-ross",
      paragraph: `
        Although I am considered an engineer, while working on web pages such as this, I tend to feel more like an artist.
        I may not be as talented as Bob Ross, but I like to believe him and I share some similarities,
        if anything at least a love for our respective crafts.
      `,
      src:
        "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555431737/shape/mentalfloss/bob_0_0.png",
    },
    {
      className: "yin-yang",
      paragraph: `
        This is my favorite symbol, well ever! It's common and easily regonizable, but many people misunderstand this symbol's true meaning.
        A common understanding is that yin and yang are opposites that contradict each other, but we miss the fact that yin gives birth to yang and vice versa.
        This is why you see the opposite color within the spiraling fish as I like to refer to them. Together the fish create a circle which constitutes the whole.
        It's important for us to remember this when living our daily lives, especially during these polarizing times.
      `,
      src:
        "https://www.dictionary.com/e/wp-content/uploads/2018/05/yin-yang.jpg",
    },
    {
      className: "kobe",
      paragraph: `
        Growing up in LA, Kobe Bryant was synonymous with basketball. Who hasn't thrown a paper ball into a waste basket with yelling Kobe?
        This man was my role model as a kid, which makes his death and the death of his daughter Gianna this year that much more difficult.
        One of a kind, I'll never forget the most important lesson Kobe taught me. Hard work pays off. Rest in Peace Mamba.
      `,
      src:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fa.espncdn.com%2Fphoto%2F2016%2F0412%2Fphoto_kobe_18_1296x1486.jpg&f=1&nofb=1",
    },
  ];
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          <h2>+1(805)-304-7544</h2>
          <h1>Alan's Website</h1>
          <h2>alan.cov@icloud.com</h2>
        </div>
        <div className="body">
          <Image data={bio} />
          {interests.map((interest) => (
            <Image data={interest} />
          ))}
        </div>
        <div className="footer">
          <a
            className="link"
            href="https://alan-covarrubias.s3.us-east-1.amazonaws.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
          <a
            className="link"
            href="https://github.com/alancovarrubias"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
