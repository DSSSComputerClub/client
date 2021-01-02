import React from "react";
import { Dropdown } from "react-bootstrap";

const LandingApp = () => {
  return (
    <div>
      <div className="bg-home"></div>
      <div className="landing">
        <h3>David Suzuki Secondary School</h3>
        <h1>Computer Club</h1>
        <Dropdown className="mt-3 text-center">
          <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
            Navigation
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/Deployment-Build/#/resources">
              Resources
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                alert("Coming Soon");
              }}
            >
              Events
            </Dropdown.Item>
            <Dropdown.Item
              href="https://github.com/DSSSComputerClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </Dropdown.Item>
            <Dropdown.Item
              href="https://discord.gg/846357CrTY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord Server
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default LandingApp;
