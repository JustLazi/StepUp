import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const Transport = () => {
    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://product-lab-main.herokuapp.com/ghost/api/v3/content/posts/?key=f06429d3909d92f90c46971143&fields=title,slug,feature_image,featured,updated_at,custom_excerpt,reading_time');
                setData(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return(
<div id="container">
 <Zoom top>
  <h1 className="center bold" id="gradienttext">Transport</h1>
  </Zoom>
  <div id='centereddiv'>
  <Fade>
  <h3 class="center">Here are the <span className="bold" id="gradienttext3">transport routes</span> </h3>
  </Fade>
  </div>
  <div id="divmesomespacesmall" />

  <Container fluid>
  
  <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-5 align-items-center">
        <Roll>
        <Col key="route1" id="padblog">
        <div id="centereddiv2">
        <Tilt style={{ height: 250, width: 250 }}>
        <Link className="App-link" to={`/transportroute1`}>
        <Card style={{"height" : '120%', width: '18rem' }} id="shadowy">
        <Card.Img variant="top" src="route1.jpg" />
        <Card.Body>
        <Card.Title>
            <p id="blogtitlefont">Route 1</p>
        </Card.Title>
        <Card.Text>
        <a id="cardtextfont">Posted: <Moment format="MMM DD, YYYY">12/21/2005</Moment></a>
        </Card.Text>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>
        </Roll>

        <Roll>
        <Col key="route2" id="padblog">
        <div id="centereddiv2">
        <Tilt style={{ height: 250, width: 250 }}>
        <Link className="App-link" to={`/transportroute2`}>
        <Card style={{"height" : '120%', width: '18rem' }} id="shadowy">
        <Card.Img variant="top" src="route2.jpg" />
        <Card.Body>
        <Card.Title>
            <p id="blogtitlefont">Route 2</p>
        </Card.Title>
        <Card.Text>
        <a id="cardtextfont">Posted: <Moment format="MMM DD, YYYY">12/21/2005</Moment></a>
        </Card.Text>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>
        </Roll>

        <Roll>
        <Col key="route3" id="padblog">
        <div id="centereddiv2">
        <Tilt style={{ height: 250, width: 250 }}>
        <Link className="App-link" to={`/transportroute1`}>
        <Card style={{"height" : '120%', width: '18rem' }} id="shadowy">
        <Card.Img variant="top" src="route3.jpg" />
        <Card.Body>
        <Card.Title>
            <p id="blogtitlefont">Route 3</p>
        </Card.Title>
        <Card.Text>
        <a id="cardtextfont">Posted: <Moment format="MMM DD, YYYY">12/21/2005</Moment></a>
        </Card.Text>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>
        </Roll>
    </Row>
    <div id="divmesomespacesmall"></div>
    </Container>
</div>
    )
}

export default Transport;
