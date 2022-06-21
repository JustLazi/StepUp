import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';


function Schedule6s() {

    const [schedule6s, setSchedule6s] = useState(null);

    useEffect(() => {
        const fetchSchedule6s = async() => {
            const { schedule6s } = await request('https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            `{
                schedule6s(orderBy: orderOfSchedule_ASC) {
                    time
                    classA
                    classB
                  }
              }
            `
            );

    setSchedule6s(schedule6s);
  };

  fetchSchedule6s();

},[]);

        return (
            <div id="container">
                <h1 className="center bold" id="gradienttext">6th Grade Schedule</h1>
                <div className='blank'></div>
                <div id="divmesomespacesmall" />
                {!schedule6s ? (
                    'Loading'
                ) : (
                        <Container fluid>
                        <Row xs={3} sm={3} md={3} lg={3} xl={3} className="g-1 align-items-center d-flex card-block">
                    
                            {schedule6s.map((schedule6, i) => (
                                
                                <Fade bottom cascade>
                                <Col key={schedule6.time}>
                                <Card id = 'calendarcard'>
                                  
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                        <a>{schedule6.time}</a>
                                    </Card.Title>
                                    
                                </Card>

                                </Col>
                                <Col>
                                <Card id = 'calendarcard'>
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{schedule6.classA}</a>
                                  </Card.Title>
                                  </Card>
                                
                                </Col>

                                <Col>
                                <Card id = 'calendarcard'>
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{schedule6.classB}</a>
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

export default Schedule6s;