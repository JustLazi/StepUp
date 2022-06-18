import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import Moment from 'react-moment';

function Announcements() {

    const [announcements, setAnnouncements] = useState(null);

    useEffect(() => {
        const fetchAnnouncements = async() => {
            const { announcements } = await request('https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            `{
                announcements(orderBy: date_DESC) {
                  writer
                  date
                  description
                }
              }
            `
            );

    setAnnouncements(announcements);
  };

  fetchAnnouncements();

},[]);

        return (
            <div id="container">
                <h1 className="center bold" id="gradienttext">Announcements</h1>
                <div className='blank'></div>
                <div id="divmesomespacesmall" />
                {!announcements ? (
                    'Loading'
                ) : (
                        <Container fluid>
                        <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-1 align-items-center d-flex card-block">
                    
                            {announcements.map((announcement, i) => (
                                
                                <Fade bottom cascade>
                                <Col key={announcement.writer}>
                                <Card style={{"height" : '120%', width: '75vw'}} id="faqcard">
                                  
                                    <Card.Title>
                                        <a>{announcement.writer}</a>
                                    </Card.Title>
                                    <Card.Text>
                                  {announcement.description}
                                  </Card.Text>
                                  <Card.Text>
                                  <Moment format="MMM DD, YYYY">{announcement.date}</Moment>

                                  </Card.Text>
                                  
                                  
                                </Card>
                                <div id="divmesomespacesmall"></div>
                                </Col>
                                </Fade>

                            ))}
                        </Row>
                        </Container>
                )}
            </div>
        );
    };

export default Announcements;