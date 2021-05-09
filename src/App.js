import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { navBar, mainBody, about, projects, skills, getInTouch, experiences } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody gradient={mainBody.gradientColors} title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`} message={mainBody.message} icons={mainBody.icons} ref={ref} />
      {about.show && <AboutMe heading={about.heading} message={about.message} link={about.imageLink} imgSize={about.imageSize} resume={about.resume} />}
      {experiences.show && <Experience experiences={experiences} />}
      {projects.show && <Project heading={projects.heading} username={projects.gitHubUsername} />}
      {skills.show && <Skills heading={skills.heading} hardSkills={skills.hardSkills} softSkills={skills.softSkills} />}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" component={() => <Home ref={titleRef} />} />
      <Footer>{getInTouch.show && <GetInTouch heading={getInTouch.heading} message={getInTouch.message} email={getInTouch.email} />}</Footer>
    </BrowserRouter>
  );
};

export default App;
