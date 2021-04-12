import React from "react";

const navs = [
  {
    title: "Important Links",
    links: [
      {
        title: "Resume",
        href:
          "https://alancovarrubiaswebsite.s3-us-west-1.amazonaws.com/Alan_Covarrubias_Resume.pdf",
      },
      {
        title: "Github",
        href: "https://github.com/alancovarrubias",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/alan-covarrubias/",
      },
    ],
  },
  {
    title: "Skill Proficiencies",
    links: [
      {
        title: "HTML",
        href:
          "https://github.com/alancovarrubias/personal-website/tree/master/src",
      },
      {
        title: "CSS",
        href:
          "https://github.com/alancovarrubias/personal-website/tree/master/src/scss",
      },
      {
        title: "React",
        href: "https://github.com/alancovarrubias/sports-app/tree/main/client",
      },
      {
        title: "GraphQL",
        href: "https://github.com/alancovarrubias/sports-app/tree/main/server",
      },
      {
        title: "Ruby on Rails",
        href: "https://github.com/alancovarrubias/sports-app/tree/main/nba",
      },
      {
        title: "Python",
        href: "https://github.com/alancovarrubias/sports-app/tree/main/crawler",
      },
      {
        title: "Client Side Testing",
        href:
          "https://github.com/alancovarrubias/sports-app/tree/main/client/test-utils",
      },
      {
        title: "Backend API Testing",
        href:
          "https://github.com/alancovarrubias/sports-app/tree/main/nba/spec",
      },
    ],
  },
];

function Navbar() {
  const navLinks = navs.map((nav) => {
    const sublist = nav.links.map((link) => (
      <li>
        <a href={link.href} target="_blank">
          {link.title}
        </a>
      </li>
    ));
    return (
      <li>
        {nav.title}
        <ul>{sublist}</ul>
      </li>
    );
  });
  return (
    <nav>
      <ul>{navLinks}</ul>
    </nav>
  );
}

export default Navbar;
