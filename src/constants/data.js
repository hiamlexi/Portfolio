
import {
    contact,
    github,
    javascript,
    react,
    java,
    python,
    c1,
} from "../assets/icons";


export const GitLink = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/hiamlexi",
  },
];
export const experiences = [
  {
    title: "Amanuen",
    company_name: "University of Gothenburg – Software Engineering Dept.",
    iconKey: "GU",
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
      iconKey: "SGS",
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
    iconKey: "GTB",
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
    iconKey: "LH",
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
      iconUrl: 'contact',
      link: '/contact',
  },
  {
      name: 'GitHub',
      iconUrl: 'github',
      link: 'https://www.linkedin.com/in/linhpham404/',
  },

];

export const projects = [
  {
      iconUrl: "python",
      theme: 'btn-back-red',
      name: 'VS Code extension for requirement management tool',
      description:'T-Reqs is a tool support for managing requirements in large-scale agile system development, a text-based requirements management solution based on the git version control system by CLI. Together we bring it in the form of a VS Code extension with friendly GUI. [TODO] Publish the link to repo when finish',
      //[TODO] add link to the project repo when it published
      link: 'https://marketplace.visualstudio.com/items?itemName=treqs-vscode.treqs-vscode',
  },

  {
      iconUrl: "javascript",
      theme: 'btn-back-pink',
      name: 'This porfolio website',
      description:'This porpfolio website is built using React.js, Three.js and Tailwind CSS.The website is designed to be responsive and user-friendly also maintain security in the backend with bucket and calling api approach.',
      //[TODO] add link to the project repo when it published
      link: 'https://github.com/hiamlexi/Portfolio',
  },
  {
    iconUrl: "react" ,
    theme: 'btn-back-orange',
    name: '  SmartPlant Monitor: Intelligent Plant Monitoring and Security System',
    description:'The SmartPlant Monitor is an IoT system that helps keep plants healthy and secure. It uses temperature and humidity sensors to monitor conditions and lets users check this data on their phones. Using cloud to send sms and make phone call to user to alert about security threats.',
    link: 'https://github.com/hiamlexi/SmartPlant-Monitor-Intelligent-Plant-Monitoring-and-Security-System',
},
  {
      iconUrl: "devops",
      theme: 'btn-back-blue',
      name: 'Self driving mini vehicles (in a data driven way)',
      description:'A project that aims to build a self-driving mini vehicle using Arduino and C/C++. The project focuses on data-driven approaches to enhance the vehicle\'s navigation and decision-making capabilities.',
      descriptionDetails: 'The vehicle is equipped with sensors and actuators to perceive its environment and make real-time decisions. The original repository is in GitLab.',
      link: 'https://github.com/hiamlexi/self-driving-vehicles-in-a-data-driven-way',
  },

  {
      iconUrl: "c1" ,
      theme: 'btn-back-yellow',
      name: 'A Hand-gesture controlled mini-car',
      description:'A project to develope a hand-gesture-controlled car with a mobile app interface',
      link: 'https://github.com/hiamlexi/Hand-gesture-controlled-mini-car-MQTT-ARDUINO-C--Android-Studio',
  },

  
  {
      iconUrl: "java" ,
      theme: 'btn-back-green',
      name: 'A minigame in Java',
      description:'A project to develop a fully functioning Snake Game',
      link: 'https://github.com/hiamlexi/Snake-game-Java-Gradle-',
  },

  {
      iconUrl: "react" ,
      theme: 'btn-back-orange',
      name: 'Dental appointment management system',
      description:'A dental appointment management system designed with a microservices architecture that has modularity and scalability. MERN stack is used for this project and it also shows the architecture design of the system to handle peak load.',
      link: 'https://drive.google.com/file/d/1em4W_MaOVkDEumVG9ETarWdEjSwmkG0f/view?usp=sharing',
  },

];