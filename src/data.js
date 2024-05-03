import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";

export const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "scroll-to-home",
    offSet: -53,
  },
  {
    id: 2,
    name: "Tech Stack",
    path: "scroll-to-techstack",
    offSet: -53,
  },
  {
    id: 3,
    name: "Projects",
    path: "scroll-to-projects",
    offSet: -155,
  },
  // {
  //   id: 4,
  //   name: "Recommendations",
  //   path: "scroll-to-recommendations",
  //   offSet: 0,
  // },
  {
    id: 5,
    name: "Contact",
    path: "scroll-to-contact",
    offSet: -53,
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Portfolio",
    description:
      "Built an engaging and responsive personal portfolio website using React, enhanced with the functionality of `react-scroll` and aesthetic appeal of `react-icons`.",
    sourceCodeUrl: "https://github.com/shubhammane21/portfolio",
  },
  {
    id: 2,
    name: "Shopper",
    description:
      "Complete Shppper site desgined with HTML5 ,CSS, Bootstrap",
    sourceCodeUrl: "https://github.com/shubhammane21/Shopper",
  },
  {
    id: 3,
    name: "Navigation",
    description:
      "Responsive navbar and sidebar navigation with animations. Used react hooks, props, react-router, react-icons and CSS",
    sourceCodeUrl: "https://github.com/",
  },
  {
    id: 4,
    name: "HotelBooking",
    description:
      "",
    sourceCodeUrl: "https://github.com",
  },
  {
    id: 5,
    name: "Weather app",
    description:
      "Built a simple weather application using React that allows users to check the current weather conditions for a specific location.fetching weather data from an API, and displaying it in a user-friendly interface",
    sourceCodeUrl: "https://github.com/shubhammane21/WeatherApp",
  },
  {
    id: 6,
    name: "AniamationWebApp",
    description:
      "",
    sourceCodeUrl: "https://github.com/",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    url: "https://twitter.com/shubham_mane_21",
    cName: "icon twitter-icon",
    logo: <FaIcons.FaTwitter />,
  },
  {
    id: 2,
    url: "https://github.com/shubhammane21",
    cName: "icon github-icon",
    logo: <FaIcons.FaGithub />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/shubhammane21",
    cName: "icon linkedin-icon",
    logo: <FaIcons.FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.instagram.com/ms21_cs",
    cName: "icon instagram-icon",
    logo: <FaIcons.FaInstagram />,
  },
];

export const techStack = [
  {
    id: 1,
    stackName: "Languages",
    logo: <FaIcons.FaCode />,
    cName: "stack",
    technologies: [
      {
        id: 2,
        name: "JavaScript ES6",
        cName: "technology",
        logo: <SiIcons.SiJavascript />,
      },
      {
        id: 4,
        name: "CSS3",
        cName: "technology",
        logo: <SiIcons.SiCss3/>,
      },
      {
        id: 3,
        name: "HTML5",
        cName: "technology",
        logo: <SiIcons.SiHtml5 />,
      },
    ],
  },
  {
    id: 2,
    stackName: "Frameworks",
    logo: <AiIcons.AiFillCodeSandboxCircle />,
    cName: "stack",
    technologies: [
      {
        id: 1,
        name: "ReactJS",
        cName: "technology",
        logo: <SiIcons.SiReact />,
      },
      {
        id: 2,
        name: "NodeJS",
        cName: "technology",
        logo: <FaIcons.FaNodeJs />,
      },
      {
        id: 3,
        name: "TypeScript",
        cName: "technology",
        logo: <SiIcons.SiTypescript />,
      },
      {
        id: 4,
        name: "Bootstrap",
        cName: "technology",
        logo: <SiIcons.SiBootstrap />,
      },
      
    ],
  },
  {
    id: 3,
    stackName: "Databases",
    logo: <FaIcons.FaDatabase />,
    cName: "stack",
    technologies: [
      {
        id: 1,
        name: "MongoDB",
        cName: "technology",
        logo: <SiIcons.SiMongodb />,
      },
      {
        id: 2,
        name: "SQL",
        cName: "technology",
        logo: <AiIcons.AiOutlineConsoleSql />,
      },
    ],
  },
  {
    id: 4,
    stackName: "Tools",
    logo: <FaIcons.FaToolbox />,
    cName: "stack",
    technologies: [
      {
        id: 1,
        name: "Git",
        cName: "technology",
        logo: <DiIcons.DiGitBranch />,
      },
      {
        id: 2,
        name: "GitHub",
        cName: "technology",
        logo: <FaIcons.FaGithub />,
      },
      {
        id:3,
        name:"VScode",
        cName:"technology",
        logo:<FaIcons.FaCode/>

      }
    ],
  },
];
