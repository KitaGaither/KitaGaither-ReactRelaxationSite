import React, { Component } from 'react';
import {
  Button,
  Navbar,
  Jumbotron,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Row,
  Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isNavOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  handleSubmit(values) {
    console.log('Current state is: ' + JSON.stringify(values));
    alert('Current state is: ' + JSON.stringify(values));
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    //alert('toggleModal Works but I dont know what is preventing my modal from openiing.');
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className='container'>
            <div className='row col-xs-4 col-md-12'>
              <div className='col text-left'>
                <h1 className='ml-0'>Relaxation Spa</h1>
                <h6>MIND | BODY | SPIRIT</h6>
              </div>
            </div>
            <div className='row col-xs-4 col-md-12'></div>
            <div className='col text-center'>
              <h1 className='text-white'>Ask about our specials!</h1>
            </div>

            <div className='row col-xs-4 col-md-12'>
              <div className='col text-right'>
                <Button
                  onClick={this.toggleModal}
                  className='btn-lg pull-right'
                >
                  Book Now!
                </Button>
              </div>
            </div>

            <div>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} className='modalHeader'>
                  Confirm Your Appointment Below
                </ModalHeader>

                <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className='form-group'>
                      <Label htmlFor='author'>First Name</Label>
                      <Control.text
                        className='form-control'
                        model='.author'
                        id='author'
                        name='author'
                        placeholder='First Name'
                        validators={{
                          required,
                          minLength: minLength(2),
                          maxLength: maxLength(15),
                        }}
                      />

                      <Errors
                        className='text-danger'
                        model='.author'
                        show='touched'
                        component='div'
                        messages={{
                          required: 'Required',
                          minLength: 'Must be at least 2 characters',
                          maxLength: 'Must be 15 characters or less',
                        }}
                      />
                    </Row>

                    <Row className='form-group'>
                      <Label htmlFor='author'>Last Name</Label>
                      <Control.text
                        className='form-control'
                        model='.author'
                        id='author'
                        name='author'
                        placeholder='Last Name'
                        validators={{
                          required,
                          minLength: minLength(2),
                          maxLength: maxLength(15),
                        }}
                      />

                      <Errors
                        className='text-danger'
                        model='.author'
                        show='touched'
                        component='div'
                        messages={{
                          required: 'Required',
                          minLength: 'Must be at least 2 characters',
                          maxLength: 'Must be 15 characters or less',
                        }}
                      />
                    </Row>

                    <Row className='form-group'>
                      <Label htmlFor='phoneNum' md={2}>
                        Phone
                      </Label>
                        <Control.text
                          model='.phoneNum'
                          id='phoneNum'
                          name='phoneNum'
                          placeholder='Phone number'
                          className='form-control'
                          validators={{
                            required,
                            minLength: minLength(10),
                            maxLength: maxLength(15),
                            isNumber,
                          }}
                        />
                        <Errors
                          className='text-danger'
                          model='.phoneNum'
                          show='touched'
                          component='div'
                          messages={{
                            required: 'Required',
                            minLength: 'Must be at least 10 numbers',
                            maxLength: 'Must be 15 numbers or less',
                            isNumber: 'Must be a number',
                          }}
                        />
                    </Row>
                    <Row className='form-group'>
                      <Label htmlFor='email' md={2}>
                        Email
                      </Label>
                        <Control.text
                          model='.email'
                          id='email'
                          name='email'
                          placeholder='Email'
                          className='form-control'
                          validators={{
                            required,
                            validEmail,
                          }}
                        />
                        <Errors
                          className='text-danger'
                          model='.email'
                          show='touched'
                          component='div'
                          messages={{
                            required: 'Required',
                            validEmail: 'Invalid email address',
                          }}
                        />
                    </Row>
                    <Row className='form-group'>
                        <div className='form-check'>
                          <Label check>
                            <Control.checkbox
                              model='.agree'
                              name='agree'
                              className='form-check-input'
                            />{' '}
                            <strong>May we contact you?</strong>
                          </Label>
                        </div>
                    </Row>

                    <Row class='row form-group'>
                      <label class='col-sm-6 col-form-label' for='date'>
                        Date of Massage
                      </label>
                      <div class='col-sm-6'>
                        <input
                          class='form-control'
                          type='date'
                          name='date'
                          id='date'
                          placeholder='date'
                        />
                      </div>
                    </Row>

                    <div className='form-group'>
                      <Label htmlFor='rating'>Single or Couple's Massage</Label>
                      <Control.select
                        className='form-control'
                        model='.rating'
                        id='rating'
                        name='rating'
                      >
                        <option value='option1'>Single Massage</option>
                        <option value='option2'>Couple's Massage</option>
                      </Control.select>
                    </div>

                    <div className='form-group'>
                      <Label htmlFor='rating'>Length of Massage</Label>
                      <Control.select
                        className='form-control'
                        model='.rating'
                        id='rating'
                        name='rating'
                      >
                        <option value='option1'>30 minutes</option>
                        <option value='option2'>60 minutes</option>
                        <option value='option2'>90 minutes</option>
                        <option value='option2'>120 minutes</option>
                      </Control.select>
                    </div>

                    <div className='form-group'>
                      <Label htmlFor='text'>Any Special Requests?</Label>
                      <Control.textarea
                        className='form-control'
                        rows='6'
                        model='.text'
                        id='text'
                        name='text'
                      />
                    </div>

                    <div>
                      <Button
                        onClick={this.submitForm}
                        type='submit'
                        value='submit'
                        className='submitButton'
                      >
                        Submit
                      </Button>
                    </div>
                  </LocalForm>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/about'>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/services'>
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contact'>
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
