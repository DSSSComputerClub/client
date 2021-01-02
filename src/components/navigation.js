import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/Deployment-Build/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Deployment-Build/#/resources">Resources</Nav.Link>
          <Nav.Link
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            Events
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://github.com/DSSS-Computer-Club"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
