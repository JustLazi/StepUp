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
import transportroute1 from './transportroute1';
import transportroute2 from './transportroute2';
import transportroute3 from './transportroute3';
import Mondays from './Monday';
import Tuesdays from './Tuesday';
import Wednesdays from './Wednesday';
import Thursdays from './Thursday';
import Fridays from './Friday';

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
        <Route path="/transportroute1" exact component={transportroute1} />
        <Route path="/transportroute2" exact component={transportroute2} />
        <Route path="/transportroute3" exact component={transportroute3} />
        <Route path="/Monday" exact component={Mondays} />
        <Route path="/Tuesday" exact component={Tuesdays} />
        <Route path="/Wednesday" exact component={Wednesdays} />
        <Route path="/Thursday" exact component={Thursdays} />
        <Route path="/Friday" exact component={Fridays} />


      </Switch>
      </div>
      </Router>
        )
    }
}
