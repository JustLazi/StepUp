import React, { useState, useEffect } from 'react';
import './App.css';
import { request } from 'graphql-request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import Moment from 'react-moment';
import Nav from 'react-bootstrap/Nav'

const Announcement8 = () => {

    const [announcements, setAnnouncements] = useState(null);

    useEffect(() => {
        const fetchAnnouncements = async() => {
            const { announcements } = await request('https://api-us-east-1.hygraph.com/v2/cl4bneb8634nl01w83u2w32z3/master', 
            `{
                announcements(orderBy: date_DESC where: {grade_gte: 8}) {
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
                <Nav variant="pills" className="justify-content-center" activeKey="1">
                <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-1 align-items-center d-flex card-block">
                <Col>
                <Nav.Item>
                    <Nav.Link eventKey="General" href="/Announcements"  className='center'>
                            General Announcement
                     </Nav.Link>
                </Nav.Item>
                </Col>
                <Col>
                <Nav.Item>
                    <Nav.Link eventKey="4thgrade" title="4thgrade" href="/Announcement4" className='center' >
                      4th grade announcements
                    </Nav.Link>
                </Nav.Item>
                </Col>
                <Col>
                <Nav.Item>
                    <Nav.Link eventKey="5thgrade" title="5thgrade" href="/Announcement5" className='center'>
                      5th grade announcements
                    </Nav.Link>
                </Nav.Item>
                </Col>
                <Col>
                <Nav.Item>
                    <Nav.Link eventKey="6thgrade" title="6thgrade" href="/Announcement6" className='center'>
                      6th grade announcements
                    </Nav.Link>
                </Nav.Item>
                </Col>
                <Col>
                <Nav.Item>
                    <Nav.Link eventKey="7thgrade" title="7thgrade" href="/Announcement7" className='center'>
                      7th grade announcements
                    </Nav.Link>
                </Nav.Item>
                </Col>
                <Col>
                <Nav.Item>
                    <Nav.Link eventKey="8thgrade" title="8thgrade" href="/Announcement8" className='center' id='activelink'>
                      8th and 9th grade announcements
                    </Nav.Link>
                </Nav.Item>
                </Col>
                </Row>
                </Nav>
                
                <div id="divmesomespace"></div>
                <div id="divmesomespacesmall" />
                {!announcements ? (
                    <p id='center'>Loading</p>
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

export default Announcement8;