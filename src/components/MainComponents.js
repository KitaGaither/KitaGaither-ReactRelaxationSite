import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Services from './ServicesComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';




class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };
        return(
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition classNames="page" timeout={300}>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/services' component={Services} />
                        <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
        
    }
}

export default Main;