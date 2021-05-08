import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import { projects } from "../../editable-stuff/projects";

const Project = ({ heading, ...rest }) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard key={`project-card-${index}`} id={`project-card-${index}`} data={project} />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
