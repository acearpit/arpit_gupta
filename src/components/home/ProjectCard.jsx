import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ data }) => {
  const { name, startDate, endDate, description, repoLink, liveLink, techStack } = data;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name}</Card.Title>
          <Card.Text>
            {startDate} - {endDate}
          </Card.Text>
          <Description description={description} />
          <CardButtons repoLink={repoLink} liveLink={liveLink} />
          <hr />
          <TeckStack techStack={techStack} />
        </Card.Body>
      </Card>
    </Col>
  );
};

const Description = ({ description }) => {
  return (
    <div style={{ width: "100%", margin: 'auto auto 20px auto', height: '140px', overflowY: 'scroll' }}>
      {description.map((point, idx) => (
        <div key={idx}>
          <i className="fas fa-caret-right mr-2"/>{point}
        </div>
      ))}
    </div>
  );
};

const CardButtons = ({ repoLink, liveLink }) => {
  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center" }}>
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mr-1 mb-1" style={{ width: "48%" }}>
        <i className="fas fa-laptop-code" /> Live Link
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mb-1" style={{ width: "48%" }}>
        <i className="fab fa-github" /> Repo Link
      </a>
    </div>
  );
};

const TeckStack = ({ techStack }) => {
  return (
    <div style={{width: '100%',minHeight: '100px', maxHeight: '100px', overflowX:'hidden',overflowY: 'scroll'}}>
      Teck Stack :
      {techStack.map((tech) => (
        <span key={tech} className="badge badge-light card-link p-2 m-1">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectCard;
