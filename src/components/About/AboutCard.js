import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Redwan Karoni </span>
            from <span className="purple"> Rambouillet, France.</span>
            <br />
            I am a React Developer.
            <br />
            I completed training in web integration and front-end development at OpenClassrooms.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Music as a DJ
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Embrace your passion, code with creativity, and let your work inspire others. Every line of code is a step towards making a difference."{" "}
          </p>
          <footer className="blockquote-footer">Redwan Karoni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
