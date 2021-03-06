import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
  {
    src: '../assets/images/sparobe.jpg',
    altText: 'woman in white spa robe',
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
    altText: 'lotion bottle, towel and pink flower',
    caption: 'We use responsibly resourced products for all of our massages.',
    header: 'Organic Massage Oils',
    key: '3'
  }
];
const MyCarousel = () => <div className="container carousel"><div className="row"><UncontrolledCarousel items={items} /></div></div> ;

export default MyCarousel;