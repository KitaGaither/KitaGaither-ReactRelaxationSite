import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  


  render() {
      return (
        <div className="App">

          <Jumbotron className="mb-0">
            <header className="jumbotron jumbotron-fluid text-left">
                    <h1>Relaxation Spa</h1>
                    <h6>SPIRIT | MIND | BODY</h6>
                    <p className="text-center">Ask about our specials!</p>
                    <div className="text-right">
                        <Button type="Button" className="btn">
                            <a id="reserveButton" role="Button" className="btn btn-lg text-white text-nowrap">Book Here</a>
                        </Button>
                    </div>
                </header>
          </Jumbotron>

          <Navbar dark className="mt-0">
            <div className="container">
              <NavbarBrand href="/"></NavbarBrand>
            </div>
              <nav className="navbar navbar-expand-sm navbar-dark sticky-top ml-auto">
                <div className="container">
                  <Button
                    className="navbar-toggler ml-auto mr-2"
                    type="Button"
                    data-toggle="collapse"
                    data-target="#relaxationNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </Button>
                    <div className="collapse navbar-collapse ml-3" id="relaxationNavbar">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="services.html">Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                </div>
              </nav>
          </Navbar>
        </div> 
    );
  }
}

export default App;
