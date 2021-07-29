// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #c96920, #d12626,#2f69de",
  firstName: "Arpit",
  middleName: "",
  lastName: "Gupta",
  message: "Developer | Engineer",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arpit---gupta/",
    },
    {
      image: "fa-github",
      url: "https://github.com/acearpit",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/GuptaArpit0007/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_gupta.arpit.01/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/arpitgupta_1.jpg"),
  imageSize: 375,
  message:
    "Hi, my name is Arpit Gupta. I’m an engineering student of 2022 batch from Guru Gobind Singh Indraprastha University at New Delhi. I'm passionate about building useful and highly scalable web apps and would love to talk about anything interesting.",
  resume: "https://drive.google.com/file/d/1rKwvGSDKMU7Vl3HnDTTt3Rn6YKvF-7fD/view?usp=sharing",
};

// Experience Section
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Software Developer Engineer Intern", // Here Add Company Name
      company: "Sigaram Technologies",
      companylogo: require("../assets/img/sigaram.jpg"),
      date: "March 2021 – Present",
    },
    {
      role: "Front-End Developer Intern",
      company: "VKarma",
      companylogo: require("../assets/img/vkarma.png"),
      date: "May 2020 – June 2020",
    },
  ],
};

// PROJECTS SECTION
const projects = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "acearpit",
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 95 },
    { name: "C++", value: 80 },
    { name: "Data Structures And Algorithms", value: 90 },
    { name: "OOPS", value: 85 },
    { name: "MongoDB", value: 75 },
    { name: "Express.js", value: 80 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "Redux", value: 90 },
    { name: "REST API's", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 100 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 85 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 85 },
    { name: "Organization", value: 75 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Intern/Full-Time Software Engineering position! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "agsinghgarg131@gmail.com",
};

export { navBar, mainBody, about, projects, skills, getInTouch, experiences };
