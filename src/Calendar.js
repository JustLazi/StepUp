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
        <h1 className="center bold" id="gradienttext">General Schedule</h1>
        </Zoom>
        <div id="divmesomespacesmall" />
        <Container fluid>
        
        <Fade>
        <Row xs={1} sm={1} md={2} lg={3} xl={5} >

        <Col key="Schedule4" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Schedule4`}>
        <Card style={{"height" : '32rem', width: '18vw' }} id="calendartilt">
        <Card.Body> 
        <Card.Title className = "centeredcard">
            <p id="calendarfont">4th Grade</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Schedule5" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Schedule5`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">5th Grade</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Schedule6" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Schedule6`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">6th Grade</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Schedule7" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Schedule7`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">7th Grade</p>
        </Card.Title>
        </Card.Body>
        </Card>
        </Link>
        </Tilt>
        </div>
        </Col>

        <Col key="Schedule89" id="padblog">
        <div id="centereddiv2">
        <Tilt>
        <Link className="App-link" to={`/Schedule89`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
        <Card.Body>
        <Card.Title className = "centeredcard">
            <p id="calendarfont">8th & 9th Grade</p>
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