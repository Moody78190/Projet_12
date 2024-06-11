import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/xavatario.svg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Html ,Css ,Sass , Javascript and React. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with 
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <Tilt className="rounded-tilt">
    <img src={myImg} className="img-fluid" alt="avatar" />
</Tilt>

  </Col>
        </Row>
        <div>
      <Link to="/contact">
        <button className="btn btn-primary">Get in Touch</button>
      </Link>
    </div>
      </Container>
    </Container>
  );
}
export default Home2;
