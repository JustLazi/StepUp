import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';


function Schedule7s() {

    const [schedule7s, setSchedule7s] = useState(null);

    useEffect(() => {
        const fetchSchedule7s = async() => {
            const { schedule7s } = await request('https://api-us-east-1.hygraph.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            `{
                schedule7s(orderBy: orderOfSchedule_ASC) {
                    time
                    classA
                    classB
                    descriptionA
                    descriptionB
                  }
              }
            `
            );

    setSchedule7s(schedule7s);
  };

  fetchSchedule7s();

},[]);

        return (
            <div id="container">
                <h1 className="center bold" id="gradienttext">7th Grade Schedule</h1>
                <div className='blank'></div>
                <div id="divmesomespacesmall" />
                {!schedule7s ? (
                    'Loading'
                ) : (
                        <Container fluid>
                        <Row xs={3} sm={3} md={3} lg={3} xl={3} className="g-1 align-items-center d-flex card-block">
                    
                            {schedule7s.map((schedule7, i) => (
                                
                                <Fade bottom cascade>
                                <Col key={schedule7.time}>
                                <Card id = 'calendarcard'>
                                  
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                        <a>{schedule7.time}</a>
                                    </Card.Title>
                                    
                                </Card>

                                </Col>
                                <Col>
                                <Card id = 'calendarcard'>
                                    <Card.Title id = 'calendarcardtextclass' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{schedule7.classA}</a>
                                  </Card.Title>
                                  <Card.Subtitle id='carddescription'>
                                  <a>{schedule7.descriptionA}</a>
                                  </Card.Subtitle>
                                  </Card>
                                
                                </Col>

                                <Col>
                                <Card id = 'calendarcard'>
                                    <Card.Title id = 'calendarcardtextclass' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{schedule7.classB}</a>
                                  </Card.Title>
                                  <Card.Subtitle id='carddescription'>
                                  <a>{schedule7.descriptionB}</a>
                                  </Card.Subtitle>
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

export default Schedule7s;