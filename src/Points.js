import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Points() {

    const [points, setPoints] = useState(null);

    useEffect(() => {
        const fetchPoints = async() => {
            const { points } = await request('https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            
            `{
                points {
                    sname
                    spoint
                }
            }
            `
            );

    setPoints(points);
  };

  fetchPoints();
}, []);


        return (
            <div id="container" class="center">
                {!points ? (
                    'ERROR QUERY NOT WORKING'
                ) : (
                    <div>
                    <section>
                    <div id="divmesomespacesmall"></div>
                    <Zoom top>
                    <h1 className="center bold" id="gradienttext">About Product Lab</h1>
                    </Zoom>
                    <div id="divmesomespacesmall" />
                      <p id="textchunk">Launched in September 2021, Product Lab is Harvard College's first Product Management organization.</p>
                      <p id="textchunk">Through training programs, industry experience, and mentorship, Product Lab helps creative problem solvers from diverse backgrounds grow into future product leaders.</p>
                  </section>
                  <section>
                    <div id="divmesomespacesmall" />
                    <h1 className="bold">Board Members</h1>
                    <div id="divmesomespacesmall" />
                  </section>
                  
    <Container fluid id="limitwidth">
    <Row xs={1} sm={1} md={2} lg={2} xl={3} className="g-3 align-items-center d-flex card-block">
        {points.map((point, i) => (
    <Fade cascade>
    <Col key={point.sname}>
    <Card style={{"height" : '120%', width: '20rem'}} id="aboutcard">
      <Card.Img variant="top" src={point.spoint} />
      <Card.Body>
        <Card.Title>
            <p>{point.spoint}</p>
        </Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <Accordion id="accordian">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon id="expandmoreicon" />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography id="overridefont">About {point.sname}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography id="overridefont">
      </Typography>
    </AccordionDetails>
  </Accordion>
    </Card>
    <div id="divmesomespace"></div>
    </Col>
    </Fade>
        ))}
    </Row>
    </Container>
                    </div>
                )}
                <section id="pasteventfade">
  <h1 className="bold">Our Advisory Board</h1>
  <div id="divmesomespacesmall" />
</section>


            </div>
        );
    };

export default Points;