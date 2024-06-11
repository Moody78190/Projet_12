import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Kasa from "../../Assets/Projects/Kasa.png";
import PrintIt from "../../Assets/Projects/PrintIt.png";
import ArgentBank from "../../Assets/Projects/ArgentBank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kasa}
              isBlog={false}
              title="Kasa"
              description="Ce projet consistait à moderniser le site web de Kasa, une entreprise de location d’appartements entre particuliers,en passant d'une architecture legacy à une stack complète en JavaScript avec NodeJS côté back-end et React côté front-end."
              ghLink="https://github.com/Moody78190/projet_8.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrintIt}
              isBlog={false}
              title="Print it"
              description="Ce projet initiait au langage JavaScript en dynamisant le site statique d'une imprimerie avec un carrousel interactif. Vous exploriez les fondamentaux de JavaScript pour rendre le site plus engageant en intégrant des fonctionnalités interactives."
              ghLink="https://github.com/Moody78190/Print-it-js-main.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArgentBank}
              isBlog={false}
              title="Argent Bank"
              description="Dans ce projet, j'ai travaillié sur le développement front-end d'une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive. Votre mission principale était d'intégrer le front-end avec le back-end."
              ghLink="https://github.com/Moody78190/Projet_11.git"
                           
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
