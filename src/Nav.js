import React, { Component } from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Transport from './Transport';
import Announcements from './Announcements'
import Points from './Points'
import Calendar from './Calendar'
import Getintouch from './Getintouch';
import DarkMode from './DarkMode';
import Post from './Post';
import ScrollToTop from './ScrollToTop';


export default class Navb extends Component {
    
    render() {
        return(
            <Router>
              
      <Navbar collapseOnSelect expand="lg" fixed="top" id="nav">
        <Container>
          <Navbar.Brand><div id="logo">Your Name Here</div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbartoggle" />
          <Navbar.Collapse className="basic-navbar-nav" id="nogrow">
            <Nav className="me-auto">
              <Nav.Link eventKey="1" as={Link} to={"/"} id="navlinkoverridetextcolor" className="underline2">Home</Nav.Link>
              <Nav.Link eventKey="2" as={Link} to={"/about"} id="navlinkoverridetextcolor" className="underline2">About</Nav.Link>
              <Nav.Link eventKey="3" as={Link} to={"/Announcements"} id="navlinkoverridetextcolor" className="underline2">Announcements</Nav.Link>
              <Nav.Link eventKey="4" as={Link} to={"/Calendar"} id="navlinkoverridetextcolor" className="underline2">Calendar</Nav.Link>
              <Nav.Link eventKey="5" as={Link} to={"/Points"} id="navlinkoverridetextcolor" className="underline2">Points</Nav.Link>
              <Nav.Link eventKey="6" as={Link} to={"/Transport"} id="navlinkoverridetextcolor" className="underline2">Transport</Nav.Link>
              <Nav.Link href="/getintouch"><Button id="button"><span id="bold">Get in touch</span></Button></Nav.Link>
              <DarkMode />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/about" exact component={About} /> 
        <Route path="/Transport" exact component={Transport} />
        <Route path='/Transport/post/:slug' exact component={Post} />
        <Route path="/Announcements" exact component={Announcements} />
        <Route path="/getintouch" exact component={Getintouch} /> 
        <Route path="/Calendar" exact component={Calendar} />
        <Route path="/Points" exact component={Points} /> 
      </Switch>
      </div>
      </Router>
        )
    }
}
