import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, projects, about, skills, experiences, getInTouch } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5 ? setIsTop(true) : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop ? setIsTop(false) : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <>
      <Navbar
        ref={navbarMenuRef}
        className={`fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"}`}
        expand="md"
        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Navbar.Brand className="brand" style={{ fontWeight: "bold", fontSize: "x-large" }} href={"#home"}>
          {`< ${mainBody.firstName} ${mainBody.lastName} />`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {about.show && (
              <Nav.Link className="nav-link lead" style={{ fontWeight: "500", color: "#fff", fontSize: "x-large" }} href={"#aboutme"}>
                About
              </Nav.Link>
            )}
            {experiences.show && (
              <Nav.Link className="nav-link lead" style={{ fontWeight: "500", color: "#fff", fontSize: "x-large" }} href={"#experience"}>
                Experience
              </Nav.Link>
            )}
            {projects.show && (
              <Nav.Link className="nav-link lead" style={{ fontWeight: "500", color: "#fff", fontSize: "x-large" }} href={"#projects"}>
                Projects
              </Nav.Link>
            )}
            {skills.show && (
              <Nav.Link className="nav-link lead" style={{ fontWeight: "500", color: "#fff", fontSize: "x-large" }} href={"#skills"}>
                Skills
              </Nav.Link>
            )}
            {getInTouch.show && (
              <Nav.Link className="nav-link lead" style={{ fontWeight: "500", color: "#fff", fontSize: "x-large" }} href={"#contact"}>
                Contact
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {!isTop && (
        <Nav.Link href={"#home"}>
          <div className="back-to-top">
            <i className="fas fa-angle-up" />
          </div>
        </Nav.Link>
      )}
    </>
  );
});

export default Navigation;
