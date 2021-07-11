import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


    class Contact extends Component {
        
        handleSubmit(values) {
            console.log("Current state is: " + JSON.stringify(values));
            alert("Current state is: " + JSON.stringify(values));
        }
        render() {
        return (
            <React.Fragment>

                    <div class="container text-center">
                    <div class="row">
                    <div class="col-sm-12">
                        <h2 class="text-center router-h2">Keep in touch!</h2>
                    </div>
                    </div>
                </div>
                
                <LocalForm className="ml-4 mr-4 mt-4 mb-4 local-form" onSubmit={values => this.handleSubmit(values)}>
                    <Row className="form-group">       
                        <Label htmlFor="author">First Name</Label>
                        <Control.text className="form-control" model=".author" id="author" name="author"
                            placeholder="First Name"
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
                                                        
                    </Row> 

                    <Row className="form-group">
                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                        <Control.text model=".lastName" id="lastName" name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".lastName"
                            show="touched"
                            component="div"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be at least 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />
                    </Row>
        
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required,
                                    validEmail
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid email address'
                                }}
                            />
                    </Row>


                    <Row className="form-group">
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox
                                        model=".agree"
                                        name="agree"
                                        className="form-check-input"
                                    /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </div>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="text">Your Feedback</Label>
                        <Control.textarea className="form-control" rows="6" model=".text" id="text" name="text"
                        />
                    </Row>

                    <div className="form-group">
                        <Button onClick={this.submitForm} type="submit" value="submit" className="submitButton">Send Feedback
                        </Button>
                    </div>
                </LocalForm>
            </React.Fragment>
        );
    }
}

export default Contact;