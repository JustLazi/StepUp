import React from 'react';
import './App.css';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Calendar = () => {
    return (
        
        <div id="container">
        <Zoom top>
        <h1 className="center bold" id="gradienttext">Weekly Calendar</h1>
        </Zoom>
        <div id="divmesomespacesmall" />
        <Container fluid>
        
        <Fade>
        <Row xs={1} sm={1} md={2} lg={3} xl={5} >

        <Col key="Monday" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Monday`}>
        <Card style={{"height" : '32rem', width: '18vw' }} id="calendartilt">
        <Card.Body> 
        <Card.Title className = "centeredcard">
            <p id="calendarfont">Monday</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Tuesday" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Tuesday`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">Tuesday</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Wednesday" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Wednesday`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">Wednesday</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Thursday" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Thursday`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">Thursday</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Friday" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Friday`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">Friday</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        
    </Row>
    </Fade>
    <div id="divmesomespacesmall"></div>
    </Container>
        </div>
    )
}

export default Calendar;