import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import Moment from 'react-moment';
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Home = () => {

    const [data, setData] = useState({posts: []});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://product-lab-main.herokuapp.com/ghost/api/v3/content/posts/?key=f06429d3909d92f90c46971143&fields=title,slug,feature_image,featured,updated_at,custom_excerpt,reading_time&filter=featured:true&limit=4');
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

<section id="homepushdown">
<div id="limitwidth">
<Zoom top>
<h3 id="gradienttext" className="center bold">Step Up</h3>
</Zoom>

</div>
<Fade bottom>
<p className="center" id="homep">Welcome to Step Up website</p>

<div className="blank"></div>

<div id="announcementdiv">
    <p className="center" class="buttondescrip">Check out the latest Announcements</p>
    <Button id="bigbutton" href="/Announcements">Announcements</Button>
</div>

<div className="blank"></div>

<div id="centereddiv">
    <p className="center" class="buttondescrip">Our Calendar</p>
    <Button id="bigbutton" href="/Caldendar">Calendar</Button>
</div>

<div className="blank"></div>

<div id="pointsdiv">
    <p className="center" class="buttondescrip">Want to know how many points you have?</p>
    <Button id="bigbutton" href="/Points">Points</Button>
</div>
</Fade>
</section>

<section id="homesection">
<Fade bottom>
<h1 className="center bold">Transportation Routes</h1>
</Fade>
<div id="divmesomespacesmall" />
<Container fluid>
<Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-5 align-items-center">
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
</Row>
</Container>
</section>
</div>
    )
}

export default Home;
