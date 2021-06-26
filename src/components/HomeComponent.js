import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


function Home(props) {
    const MyCarousel = () => <div className="container"><div className="row"><UncontrolledCarousel items={items} /></div></div> ;
    const items = [
        {
          src: '../assets/images/stonesonback.jpg',
          altText: 'stonesonback',
          caption: 'Enjoy a hot stone massage to relieve stress.',
          header: 'Hot Stone Massage',
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
          caption: 'We use responsibly resourced products for all of our massages.',
          header: 'Organic Massage Oils',
          key: '3'
        }
      ];
    return (
        <div className="container text-center">
          <h2 className="router-h2">Come Relax With Us!</h2>
          <MyCarousel />
        </div>
    );
}
export default Home;   