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
        <Row xs={5} sm={5} md={5} lg={5} xl={5} >

        <Col key="Schedule4">
        <div className='center'>
        <Tilt>
        <Link className="App-link" to={`/Schedule4`}>
        <Card style={{"height" : '65vh', width: '18vw' }} id="calendartilt">
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

        <Col key="Schedule5">
        <div>
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

        <Col key="Schedule6">
        <div>
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

        <Col key="Schedule7">
        <div>
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

        <Col key="Schedule89">
        <div>
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