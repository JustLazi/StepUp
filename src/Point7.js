import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Nav from 'react-bootstrap/Nav';


function Point7() {

    const [points, setPoints] = useState(null);

    useEffect(() => {
        const fetchPoints = async() => {
            const { points } = await request('https://api-us-east-1.hygraph.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            
            `{
                points (orderBy: spoint_DESC where: {sgrade_in: [7]}){
                    sname
                    spoint
                    sgrade
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
                    'Loading points'
                ) : (
                    <div>
                    <section>
                    <div id="divmesomespacesmall"></div>
                    <Zoom top>
                    <h1 className="center bold" id="gradienttext">Points</h1>
                    </Zoom>
                    <div id="divmesomespacesmall" />
                      <p id="textchunk">Here you can see the leaderboard of the points</p>
                      <p id="textchunk">higher points means more things to buy in flea market!</p>
                  </section>
                  <section>
                    <div id="divmesomespacesmall" />
                    <Nav variant="pills" className="justify-content-center" activeKey="1">
                <Nav.Item>
                    <Nav.Link eventKey="All" href="/Points">
                            All Step Up
                     </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4thgrade" title="4thgrade" href="/Point4"  >
                      4th grade points
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="5thgrade" title="5thgrade" href="/Point5" >
                      5th grade points
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="6thgrade" title="6thgrade" href="/Point6" >
                      6th grade Points
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="7thgrade" title="7thgrade" href="/Point7" id='activelink'>
                      7th grade Points
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="8thgrade" title="8thgrade" href="/Point8">
                      8th and 9th grade Points
                    </Nav.Link>
                </Nav.Item>
      
                </Nav>
                    <div id="divmesomespacesmall" />
                  </section>
                  
    <Container fluid id="limitwidth">
    <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-3 align-items-center d-flex card-block">
        {points.map((point, i) => (
    <Fade cascade>
    <Col key={point.sname}>
    <Card style={{"height" : '120%', width: '20rem'}} id="pointcard">

      <Card.Body>
        <Card.Title>
            <p>{point.sname}</p>
        </Card.Title>
        <Card.Text id="cardname">
        {point.spoint}
        </Card.Text>
        <Card.Text>
        in {point.sgrade}th grade
        </Card.Text>
      </Card.Body>
      
    </Card>
    <div id="divmesomespace"></div>
    </Col>
    </Fade>
        ))}
    </Row>
    </Container>
                    </div>
                )}
                


            </div>
        );
    };

export default Point7;