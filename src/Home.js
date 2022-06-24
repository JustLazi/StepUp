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
import Tada from 'react-reveal/Tada';

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
    <img src='announcement.svg' id='announcementimg'></img>
    <Button id="bigbutton" href="/Announcements">Announcements</Button>
    
</div>

<div className="blank"></div>

<div id="centereddiv">
    <p className="center" class="buttondescrip">Our Calendar</p>
    <img src='calendar.svg' id='calendarimg'></img>
    <Button id="bigbutton" href="/Calendar">Calendar</Button>
</div>

<div className="blank"></div>

<div id="pointsdiv">
    <p className="center" class="buttondescrip">Want to know how many points you have?</p>
    <img src='points.svg' id='pointimg'></img>
    <Button id="bigbutton" href="/Points">Points</Button>
</div>

<div className="blank"></div>

<div id="pointsdiv">
    <p className="center" class="buttondescrip">How do I get to the program?</p>
    <img src='transport.svg' id='transportimg'></img>
    <Button id="bigbutton" href="/Transport">Transport</Button>
</div>
</Fade>
</section>

<section id="homesection">
<Fade bottom>
<h1 className="center bold">Transportation Routes</h1>
</Fade>
<div id="divmesomespacesmall" />
<Container fluid>
  
  <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5 align-items-center">
        <Tada>
        <Col key="route1" id="padblog">
        <div id="centereddiv2">
        <Tilt >
       
        <Card  id="shadowy">
        <Card.Img variant="top" src="image1.jpg" />
        </Card>

        </Tilt>
        </div>
        </Col>
        </Tada>

        <Tada>
        <Col key="route1" id="padblog">
        <div id="centereddiv2">
        <Tilt >
       
        <Card  id="shadowy">
        <Card.Img variant="top" src="image2.jpg" />
        </Card>

        </Tilt>
        </div>
        </Col>
        </Tada>

        <Tada>
        <Col key="route1" id="padblog">
        <div id="centereddiv2">
        <Tilt >
       
        <Card  id="shadowy">
        <Card.Img variant="top" src="image3.jpg" />
        </Card>

        </Tilt>
        </div>
        </Col>
        </Tada>
    </Row>
    <div id="divmesomespacesmall"></div>
    </Container>
</section>
</div>
    )
}

export default Home;
