import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';


function Schedule89s() {

    const [schedule89s, setSchedule89s] = useState(null);

    useEffect(() => {
        const fetchSchedule89s = async() => {
            const { schedule89s } = await request('https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            `{
                schedule89s(orderBy: orderOfSchedule_ASC) {
                    time
                    classA
                    classB
                  }
              }
            `
            );

    setSchedule89s(schedule89s);
  };

  fetchSchedule89s();

},[]);

        return (
            <div id="container">
                <h1 className="center bold" id="gradienttext">8th & 9th Grade Schedule</h1>
                <div className='blank'></div>
                <div id="divmesomespacesmall" />
                {!schedule89s ? (
                    'Loading'
                ) : (
                        <Container fluid>
                        <Row xs={3} sm={3} md={3} lg={3} xl={3} className="g-1 align-items-center d-flex card-block">
                    
                            {schedule89s.map((schedule89, i) => (
                                
                                <Fade bottom cascade>
                                <Col key={schedule89.time}>
                                <Card id = 'calendarcardleft'>
                                  
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                        <a>{schedule89.time}</a>
                                    </Card.Title>
                                    
                                </Card>

                                </Col>
                                <Col>
                                <Card id = 'calendarcardright'>
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{schedule89.classA}</a>
                                  </Card.Title>
                                  </Card>
                                
                                </Col>
                                <Col>
                                <Card id = 'calendarcardright'>
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{schedule89.classB}</a>
                                  </Card.Title>
                                  </Card>
                                
                                </Col>
                                  
                                </Fade>

                            ))}
                        </Row>
                        </Container>
                )}
            </div>
        );
    };

export default Schedule89s;