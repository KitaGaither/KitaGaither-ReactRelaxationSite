import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MyCarousel from './MyCarouselComponent';


class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <MyCarousel />
                <Footer />
                
            </div>
        );
    }
}

export default Main;