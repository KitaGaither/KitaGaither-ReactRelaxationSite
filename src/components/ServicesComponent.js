import React, { Component } from 'react';
import { Card, CardDeck, CardImg, CardBody, CardFooter, CardTitle, CardText } from 'reactstrap';

class Services extends Component {
    render() {
        return(
            <React.Fragment>
                <h2 className="router-h2 text-center">What Kind of Massage Would You Like?</h2>                            
                  <CardDeck className="card-deck ml-4 mr-4 mt-4 mb-4">
                    <div className="container">  
                      <div className="row">  
                        <div className="col-sm-12 col-md">
                            <Card>
                                <CardImg variant="top" src="../assets/images/stonesonback.jpg" />
                                <CardBody>
                                <CardTitle className="card-title">Gold Package</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis libero ad, quaerat minus quos voluptas a recusandae, placeat facere nostrum repellat fugit incidunt debitis facilis sequi quia id distinctio.
                                </CardText>
                                </CardBody>
                                <CardFooter>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                          </div> 
                          <div className="col-sm-12 col-md">
                            <Card>
                                <CardImg variant="top" src="../assets/images/footbath.jpg" />
                                <CardBody>
                                <CardTitle className="card-title">Silver Package</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum ipsum numquam fuga ad veniam laborum. Dolorem, molestiae? Molestiae officia dolores perspiciatis laudantium dolorum, quaerat fugit possimus quas. Earum, unde!{' '}
                                </CardText>
                                </CardBody>
                                <CardFooter>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                          </div> 
                          <div className="col-sm-12 col-md">
                            <Card>
                                <CardImg variant="top" src="../assets/images/lotion.jpg" />
                                <CardBody>
                                <CardTitle className="card-title">Bronze Package</CardTitle>
                                <CardText>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores libero atque, delectus ipsam consequatur aspernatur quo officia odit velit unde quaerat cupiditate vel, quos debitis ad dolorem saepe molestiae ab.
                                </CardText>
                                </CardBody>
                                <CardFooter>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </CardFooter>
                            </Card>
                          </div>
                          </div>
                      </div>   
                      </CardDeck>
                      
            </React.Fragment>
        );
    }
}

export default Services;