import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';



function Home(props) {
    const MyCarousel = () => <div className="container"><div className="row"><UncontrolledCarousel items={items} /></div></div> ;
    const items = [
        {
          src: '../assets/images/pretty-rocks.jpg',
          altText: 'rock tower',
          caption: 'Responsibly Sourced Stones.',
          header: 'Hot Stones',
          key: '1'
        },
        {
          src: '../assets/images/footbath.jpg',
          altText: 'footbath',
          caption: 'Try our warm foot baths to soothe achy feet.',
          header: 'Warm Foot Bath',
          key: '2'
        },
        {
          src: '../assets/images/lotion.jpg',
          altText: 'lotion',
          caption: 'We use the best massage oils for every massage.',
          header: 'Organic Massage Oils',
          key: '3'
        }
      ];
    return (
      <FadeTransform
      in
      transformProps={{
          exitTransform: 'scale(0.5) translateY(50%)'
      }}>
        <div className="container text-center">
          <h2 className="router-h2">Come Relax With Us!</h2>
          <MyCarousel />
        </div>
        </FadeTransform>
    );
}
export default Home;   