import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Services</Link></li>
                            <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-google" href="https://www.linkedin.com/in/lakitagaither/"><i className="fa fa-linkedin" /></a> 
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="https://github.com/KitaGaither/"><i className="fa fa-github" /></a> 
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}  
                        </div>
                        <div className="col-sm-4 text-center">
                            <h5>Contact</h5>
                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-615-555-1234</a><br />
                            <a role="button" className="btn btn-link" href="http://lakitagaither.com/"><i className="browser" /> lakitagaither.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
