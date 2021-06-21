import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class App extends Component {
  render() {
      return (
        <div className="App">
          <Navbar dark>
            <div className="container">
              <NavbarBrand href="/">Relaxation Spa</NavbarBrand>
            </div>
              <nav class="navbar navbar-expand-sm navbar-dark sticky-top ml-auto">
                <div class="container">
                  <button
                    class="navbar-toggler ml-auto mr-2"
                    type="button"
                    data-toggle="collapse"
                    data-target="#nucampNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse ml-3" id="nucampNavbar">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="contact.html">Contact</a>
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
