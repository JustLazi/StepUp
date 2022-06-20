import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';


function Fridays() {

    const [fridays, setFridays] = useState(null);

    useEffect(() => {
        const fetchFridays = async() => {
            const { fridays } = await request('https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            `{
                fridays(orderBy: orderOfSchedule_ASC) {
                    time
                    class
                  }
              }
            `
            );

    setFridays(fridays);
  };

  fetchFridays();

},[]);

        return (
            <div id="container">
                <h1 className="center bold" id="gradienttext">Friday's schedule</h1>
                <div className='blank'></div>
                <div id="divmesomespacesmall" />
                {!fridays ? (
                    'Loading'
                ) : (
                        <Container fluid>
                        <Row xs={2} sm={2} md={2} lg={2} xl={2} className="g-1 align-items-center d-flex card-block">
                    
                            {fridays.map((friday, i) => (
                                
                                <Fade bottom cascade>
                                <Col key={friday.time}>
                                <Card id = 'calendarcardleft'>
                                  
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                        <a>{friday.time}</a>
                                    </Card.Title>
                                    
                                </Card>

                                </Col>
                                <Col>
                                <Card id = 'calendarcardright'>
                                    <Card.Title id = 'calendarcardtext' class = "card-body align-items-center d-flex justify-content-center">
                                  <a>{friday.class}</a>
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

export default Fridays;