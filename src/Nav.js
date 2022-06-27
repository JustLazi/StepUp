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
import Announcement4 from './Announcement4';
import Announcement5 from './Announcement5';
import Announcement6 from './Announcement6';
import Announcement7 from './Announcement7';
import Announcement8 from './Announcement8';
import Point4 from './Point4';
import Point5 from './Point5';
import Point6 from './Point6';
import Point7 from './Point7';
import Point8 from './Point8';

import Schedule4s from './Schedule4';
import Schedule7s from './Schedule7';
import Schedule5s from './Schedule5';
import Schedule6s from './Schedule6';
import Schedule89s from './Schedule89';

export default class Navb extends Component {
    
    render() {
        return(
            <Router>
              
      <Navbar collapseOnSelect expand="lg" fixed="top" id="nav">
        <Container>
          <Navbar.Brand><div id="logo">Step Up</div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbartoggle" />
          <Navbar.Collapse className="basic-navbar-nav" id="nogrow">
            <Nav className="me-auto">
              <Nav.Link eventKey="1" as={Link} to={"/"} id="navlinkoverridetextcolor" className="underline2">Home</Nav.Link>
              {/* <Nav.Link eventKey="2" as={Link} to={"/about"} id="navlinkoverridetextcolor" className="underline2">About</Nav.Link> */}
              <Nav.Link eventKey="3" as={Link} to={"/Announcements"} id="navlinkoverridetextcolor" className="underline2">Announcements</Nav.Link>
              <Nav.Link eventKey="4" as={Link} to={"/Calendar"} id="navlinkoverridetextcolor" className="underline2">Calendar</Nav.Link>
              <Nav.Link eventKey="5" as={Link} to={"/Points"} id="navlinkoverridetextcolor" className="underline2">Points</Nav.Link>
              <Nav.Link eventKey="6" as={Link} to={"/Transport"} id="navlinkoverridetextcolor" className="underline2">Buses</Nav.Link>
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
        <Route path="/Announcement4" exact component={Announcement4} /> 
        <Route path="/Announcement5" exact component={Announcement5} /> 
        <Route path="/Announcement6" exact component={Announcement6} /> 
        <Route path="/Announcement7" exact component={Announcement7} /> 
        <Route path="/Announcement8" exact component={Announcement8} /> 
        <Route path="/Point4" exact component={Point4} />
        <Route path="/Point5" exact component={Point5} />
        <Route path="/Point6" exact component={Point6} />
        <Route path="/Point7" exact component={Point7} />
        <Route path="/Point8" exact component={Point8} />

        <Route path="/Schedule4" exact component={Schedule4s} />
        <Route path="/Schedule5" exact component={Schedule5s} />
        <Route path="/Schedule6" exact component={Schedule6s} />
        <Route path="/Schedule7" exact component={Schedule7s} />
        <Route path="/Schedule89" exact component={Schedule89s} />


      </Switch>
      </div>
      </Router>
        )
    }
}
