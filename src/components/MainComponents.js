import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MyCarousel from './MyCarouselComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



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
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to='/home' />
                </Switch>
                <MyCarousel />
                <Footer />
                
            </div>
        );
    }
}

export default Main;