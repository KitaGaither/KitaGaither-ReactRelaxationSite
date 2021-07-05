import React, { Component }  from 'react';
import { Button, Navbar, Jumbotron, NavbarToggler, Collapse, Nav, NavItem, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);

    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        //alert('toggleModal Works but I dont know what is preventing my modal from openiing.');
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

                        <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

                        <ModalBody>

                            <LocalForm onSubmit={values => this.handleSubmit(values)}>

                                <div className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                        <Control.select className="form-control" model=".rating" id="rating" name="rating">
                                            <option value="option1">1</option>
                                            <option value="option2">2</option>
                                            <option value="option3">3</option>
                                            <option value="option4">4</option>
                                            <option value="option5">5</option>
                                        </Control.select> 
                                </div>

                                <div className="form-group">       
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text className="form-control" model=".author" id="author" name="author"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />

                                        <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                        
                                </div> 

                                <div className="form-group">
                                        <Label htmlFor="text">Comment</Label>
                                        <Control.textarea className="form-control" rows="6" model=".text" id="text" name="text"
                                        />
                                </div>

                                <div>
                                <Button onClick={this.submitForm} type="submit" value="submit" color="primary">Submit
                                </Button>
                                </div>

                            </LocalForm>

                        </ModalBody>

                </Modal>
                
                <Button onClick={this.toggleModal} outline color="secondary"><i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
                Submit Comment
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