import {
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  summiz,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: "src/assets/images/flutter.png",
    name: "Flutter",
    type: "app",
  },
  {
    imageUrl: "src/assets/images/dart.png",
    name: "Dart",
    type: "app",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },

  {
    imageUrl: "src/assets/images/python.png",
    name: "Python",
    type: "backebnd",
  },
];

export const experiences = [
  {
    title: "Mobile Application Developer",
    company_name: "NerdDevs Ltd.",
    icon: "src/assets/images/nerddevs.png",
    iconBg: "#E1CBAC",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Tecognize Solutions Ltd.",
    icon: "src/assets/images/tecognize.png",
    iconBg: "#BCE9FB",
    date: "Feb 2022 - May 2023",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game and AVR Developer",
    company_name: "Accelerating Intelligence",
    icon: "src/assets/images/accelerating.png",
    iconBg: "#A2A2A2",
    date: "Jul 2020 - Mar 2021",
    points: [
      "Developing and maintaining AR app using Unity and C# and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/merajhossain028",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/md-meraj-hossain/",
  },
];

export const projects = [
  {
    iconUrl: "src/assets/images/pixelscraft.png",
    theme: "btn-back-red",
    name: "PixelsCraft",
    description:
      "Developed a iOS mobile application that generates AI images based on user input, allowing users to create and share unique images.",
    link: "https://apps.apple.com/us/app/pixelscraft/id6471664167",
  },
  {
    iconUrl: "src/assets/images/aimate.png",
    theme: "btn-back-blue",
    name: "Ai Mate - GPT Chat",
    description:
      "Created a Android and iOS based mobile application that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://apps.apple.com/us/app/ai-mate/id6450421199",
  },
  {
    iconUrl: "src/assets/images/jci.png",
    theme: "btn-back-blue",
    name: "JCI Bangladesh",
    description:
      "OMS based mobile application for JCI Bangladesh, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://play.google.com/store/apps/details?id=com.tecognize.jci_bangladesh&hl=en&gl=US",
  },
  {
    iconUrl: "src/assets/images/chadkrishi.png",
    theme: "btn-back-green",
    name: "Chad Krishi",
    description:
      "First mobile appliocation in Bangladesh that provides information about rooftop gargening.",
    link: "https://play.google.com/store/apps/details?id=com.newtech.chad_bagan_app&hl=en&gl=US",
  },
  {
    iconUrl: estate,
    theme: "btn-back-pink",
    name: "E-Commerce Backend",
    description:
      "Developes a e-commerce backend using Node.js, Express.js and MongoDB.",
    link: "https://github.com/merajhossain028/ecommerce-mern-project",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AR Business Card",
    description:
      "Developed a Augmented Reality based business card using Unity and Vuforia.",
    link: "https://github.com/merajhossain028/AR_Business_Card",
  },
];
