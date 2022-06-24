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
<div>
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

<div id='blanklong'></div>

</div>
<Fade>
<div className= 'center' id='lastpart'>
    <div id='divmesomespace'></div>
    <p>Location</p>
    <p>South Middle School</p>
    <p>105 Keith Ave, Brockton, MA 02301</p>
    <div id='divmesomespacesmall'></div>
    <p>Time</p>
    <p>8:00 AM to 2:30 PM</p>
    <Button id="button" href="/Getintouch">Contact US</Button>
</div>
</Fade>
</div>

    )
}

export default Home;
