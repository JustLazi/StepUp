import React from 'react';
import './App.css';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Plx from 'react-plx';
import Roll from 'react-reveal/Roll';

  const About = () => {

        return (
        <div id="aboutcontainer">
<div id="divmesomespacesmall"></div>
<Roll top>
<h1 className="center bold" id="gradienttext">About Me</h1>
</Roll>

    <div id="divmesomespace"></div>
    <h1 className="center bold">My Experiences</h1>
    <div id="divmesomespacesmall"></div>
    
    <Container fluid>
      <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-5 align-items-center">

        <Col>
        <div id="limitwidth">
        <h2 className="bold" id="gradienttextsub">Experience 3: Intern at ___</h2>
        </div>
        <Fade bottom>
        <div id="studentsitemtext">
        <ul>
          <li>June 2020 - August 2020</li>
          <li>Did ___ for ___ company</li>
          <li>Design thinking, user research, and product roadmapping</li>
        </ul>
        </div>
        </Fade>
        </Col>
        
        <Fade bottom>
        <Col>
          <div id="centereddiv"><Tilt><Image src="/boardphoto.JPG" alt="Product Lab Board Photo" id="studentspics"></Image></Tilt></div>
        </Col>
        </Fade>
          
        <Col>
        <div id="limitwidth">
        <h2 className="bold" id="gradienttextsub">Experience 2: ___</h2>
        </div>
        <Fade bottom>
        <div id="studentsitemtext">
        <ul>
          <li>June 2019 - August 2019</li>
          <li>Did ___ for ___ company</li>
          <li>PM buzzwords</li>
        </ul>
        </div>
        </Fade>
        </Col>
        
        <Fade bottom>
        <Col>
          <div id="centereddiv"><Tilt><Image src="/boardphoto.JPG" alt="Product Lab Board Photo" id="studentspics"></Image></Tilt></div>
        </Col>
        </Fade>

        <Col>
        <div id="limitwidth">
        <h2 className="bold" id="gradienttextsub">APM at Harvard Product Lab</h2>
        </div>
        <Fade bottom>
        <div id="studentsitemtext">
        <ul>
          <li>Jan 2022 - Present</li>
          <li>Did ___</li>
          <li>Completed 12-week PM bootcamp led by industry professionals</li>
        </ul>
        </div>
        </Fade>
        </Col>
        
        <Fade bottom>
        <Col>
          <div id="centereddiv"><Tilt><Image src="/boardphoto.JPG" alt="Product Lab Board Photo" id="studentspics"></Image></Tilt></div>
        </Col>
        </Fade>

      </Row>
    </Container>
    <div id="divmesomespacesmall"></div>
    <Zoom top>
    <div id="centereddiv"><Button id="bigbutton" href="/getintouch">Contact me</Button></div>
    </Zoom>
    </div>
        )
}

export default About;