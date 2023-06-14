import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  tbl,
  reactClone,
  chatApp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Development",
    icon: web,
  },
  {
    title: "Responsive Web Applications",
    icon: mobile,
  },
  {
    title: "Backend APIs",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Travel Bucket List",
    description:
      "A web app to help you get the most out of your holidays - type in a place name to find lesser-known things to do and places to see.",
    extendedDescription: 'This project was created as the final project in my web development bootcamp. It is my most complex project to date, including our own REST API, Postgres database, user authentication system, a variety of external API calls and JSON data handling, as well as an MUI-based frontend. Not only did I get to consolidate my knowledge of these technologies, but also I learnt the importance of version control and working as a team.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: tbl,
    source_code_link: "https://github.com/JamieCattoCode/travel-bucket-list-v2",
  },
  {
    name: "Mini React Clone",
    description: "A mini recreation of the React library - including rendering, useState, useEffect, and useMemo hooks.",
    extendedDescription: "I created this to explore the React docs and get a deeper, lower-level understanding of the library I use so much. The main branch is a recreation of the main React hooks, whereas the jsx branch is focused on the Virtual DOM and how elements are rendered.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
    ],
    image: reactClone,
    source_code_link: "https://github.com/JamieCattoCode/react-clone",
  },
  {
    name: "Messaging App",
    description: "A messaging app where users can create accounts, and speak to each other with in live chatrooms.",
    extendedDescription: "This was made to understand the creation of chat functionalities. I'm currently working on a project which has a chat feature, so I created this as a simple chat which I can use as a baseline.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chatengine.io",
        color: "green-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/JamieCattoCode/chat-app"
  }
];

export { services, technologies, projects };