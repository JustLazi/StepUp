import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

export default class Getintouch extends Component {
    render() {
        return (
        <div id="container">
        <h3 className="center bold" id="gradienttext">Contact Us</h3>
        <div id="formposition">
        <form action="https://getform.io/f/335805e2-e613-48ff-b327-4564bc543f0e" method="POST" acceptCharset="UTF-8">
            
            <section id="divmesomespacesmall">
            <p className="center bold">Your Name</p>
            <input type="text" name="name" placeholder="Your Name" required="required" id="input" autoFocus></input>
            </section>

            <section id="divmesomespacesmall">
            <p className="center bold">Your Email</p>
            <input type="email" name="email" placeholder="email@example.com" required="required" id="input"></input>
            </section>

            <section id="divmesomespacesmall">
            <p className="center bold">Your Grade</p>
            <input type="email" name="email" placeholder="student's grade" required="required" id="input"></input>
            </section>


            <section id="divmesomespacesmall">
            <p className="center bold">Your Message</p>
            <input type="text" name="message" placeholder="I would like to know_____ / I could not find_____" id="input"></input>
            </section>

            <section id="divmesomespacesmall">
            <Button id="button" type="submit">Submit</Button>
            </section>

        </form>
        </div>
        </div>
        )
    }
}