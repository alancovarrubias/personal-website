import React from "react";

const navs = [
  {
    title: "Important Links",
    links: [
      {
        title: "Resume",
        href: "https://alan-covarrubias.s3.us-east-1.amazonaws.com/resume.pdf",
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
        href:
          "https://github.com/alancovarrubias/login-workflow/tree/master/client/src",
      },
      {
        title: "GraphQL",
        href: "https://github.com/alancovarrubias/sports-stats",
      },
      {
        title: "Ruby on Rails",
        href: "https://github.com/alancovarrubias/nba-database",
      },
      {
        title: "Testing",
        href:
          "https://github.com/alancovarrubias/login-workflow/tree/master/e2e",
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
