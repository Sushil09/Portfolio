import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sushil Jaiswal </span>
            from <span className="purple"> Kolkata, India.</span>
            <br /> Welcome to my portfolio! I am an enthusiastic and experienced Software Developer with a passion for creating innovative solutions that make a positive impact. With five years of professional experience and a diverse skillset, I have contributed to various projects involving Java, Spring Boot, MERN stack, cloud computing, and DevOps technologies. In this portfolio, I showcase some of my most significant accomplishments and highlight my expertise as a member of the technical staff at Oracle.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Freelancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Multiplayer Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sushil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
