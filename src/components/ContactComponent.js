import React from 'react';

function Contact(props) {
    return (
        <React.Fragment>

                <div class="container text-center">
                <div class="row">
                <div class="col-sm-12">
                    <h2 class="text-center router-h2">Keep in touch!</h2>
                </div>
                </div>
            </div>
            
            <form class="ml-4 mr-4 mt-4 mb-4">
                <div class="form-group row">
                <label for="firstName" class="col-md-2 col-form-label">First Name</label>
                <div class="col-md-10">
                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                </div>
                </div>
                <div class="form-group row">
                <label for="lastName" class="col-md-2 col-form-label">Last Name</label>
                <div class="col-md-10">
                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                </div>
                </div>
                
                <div class="form-group row">
                <label for="email" class="col-md-2 col-form-label">Email</label>
                <div class="col-md-10">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                </div>
                </div>
                <div class="form-group row">
                <div class="col offset-md-2">
                    May we contact you?
                    <div class="form-check form-check-inline ml-3">
                    <input type="radio" class="form-check-input" id="contactYes" name="contactRadios" value="yes" />
                    <label for="contactYes" class="form-check-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" id="contactNo" name="contactRadios" value="no" />
                    <label for="contactNo" class="form-check-label">No</label>
                    </div>
                </div>
                </div>
                <div class="form-group row">
                <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                <div class="col-md-10">
                    <textarea class="form-control" id="feedback" name="feedback" rows="8"></textarea>
                </div>
                </div>
                <div class="form-group row">
                <div class="offset-md-2 col-md-10">
                    <button type="submit" class="btn send-feedback">Send Feedback</button>
                    </div>
                </div>
            </form>
    

        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-615-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" />https://react-relaxationspasite.netlify.app/ </a>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Contact;