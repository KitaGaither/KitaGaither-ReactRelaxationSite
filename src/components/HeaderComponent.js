import React, { Component }  from 'react';
import { Button, Navbar, Jumbotron, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row col-xs-4 col-md-12">
                            <div className="col text-left">
                                <h1>Relaxation Spa</h1>
                                <h6>MIND | BODY | SPIRIT</h6>
                            </div>
                        </div>
                        <div className="row col-xs-4 col-md-12"></div>
                        <div className="text-center">
                        <h1 className="text-white">Ask about our specials!</h1>
                        </div>

                        <div className="row col-xs-4 col-md-12"></div>
                        <div className="text-right">
                        <Button className="btn-lg">
                            Book Now!
                        </Button>
                        </div>
                    </div>
                </Jumbotron>
                
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler  onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;