import { GU, SGS, GTB, LH } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    javascript,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    ciCd,
    java,
    devops,
    docker,
    python,
    c1,
    arduino
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "backend",
    },
    {
        imageUrl: devops,
        name: "DevOps",
        type: "backend",
    },
    {
        imageUrl: ciCd,
        name: "CI-CD",
        type: "backend",
    },
    {
        imageUrl: c1,
        name: "C/C++",
        type: "backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "backend",
    },
    {
        imageUrl: arduino,
        name: "Arduino",
        type: "backend",
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
];

export const experiences = [
    {
      title: "Amanuen",
      company_name: "University of Gothenburg – Software Engineering Dept.",
      icon: GU,
      iconBg: "#a2d2ff",
      date: "Oct 2023 – Present",
      points: [
        "Guided students in programming, testing, and debugging across Java, Python, C/C++, and WebDev.",
        "Collaborated with faculty to support coursework and clarify complex computer science concepts.",
        "Created practical lab assignments and tutorials in object-oriented programming and system design.",
      ],
    },
    {
        title: "Chairwoman",
        company_name: "SGS Studentbostäder Association",
        icon: SGS,
        iconBg: "#fbc3bc",
        date: "Jan 2023 – Present",
        points: [
          "The Trust Council is a nonprofit organization dedicated to improving the living experience of approximately 1000 tenants at SGS.",
          "I organize various activities and represent tenant interests in matters concerning their living condition",
          "the resident board to organize housing policies and student community events.",
          "Acted as mediator between tenants and housing administration.",
        ],
      },
    {
      title: "Invånarguide (Civic Integration Advisor)",
      company_name: "Göteborgs Stad - Department of Democracy and Civic Services ",
      icon: GTB,
      iconBg: "#accbe1",
      date: "Jan 2024 – Jan 2025",
      points: [
        "Enhanced civic engagement by supporting citizens in accessing digital public services.",
        "Collected community feedback to improve municipal outreach and digital inclusion.",
        "Provided multilingual support and contributed to inclusive communication strategies.",
      ],
    },
    {
      title: "Läxhjälpare",
      company_name: "Stiftelsen Läxhjälpen",
      icon: LH,
      iconBg: "#b7e4c7",
      date: "Jun 2022 – Sep 2023",
      points: [
        "Mentored students in Mathematics, English, and Programming at high school level.",
        "Focused on problem-solving strategies and supporting academic confidence.",
        "Delivered personalized tutoring in coding fundamentals and mathematical thinking.",
      ],
    },

  ];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },

];

export const projects = [
];