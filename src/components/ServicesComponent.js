import React, { Component } from 'react';
import { Card, CardDeck, CardImg, CardBody, CardFooter, CardTitle, CardText } from 'reactstrap';

class Services extends Component {
    render() {
        return(
            <React.Fragment>

                <h2 className="text-center pink-h2">Spa Services Offered</h2> 

                    <CardDeck className="card-deck buddha">

                        <div classNameName="container">
                            <div className="row">

                                    <Card className="card col buddha">
                                    <CardImg className="card-img-top" src="../assets/images/floatinginwater.jpg" alt="woman floating in water" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title">Gold Package</CardTitle>
                                        <CardText className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloremque quibusdam placeat cupiditate vero ut hic provident. Ipsam harum omnis iusto, ab repellat impedit, dicta quod libero qui temporibus non.</CardText>
                                        <CardFooter className="card-text"><small className="text-muted">Last updated 3 mins ago</small></CardFooter>
                                    </CardBody>
                                    </Card>


                                    <Card className="card col buddha">
                                    <CardImg className="card-img-top" src="../assets/images/flowers.jpg" alt="woman floating in water" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title">Silver Package</CardTitle>
                                        <CardText className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloremque quibusdam placeat cupiditate vero ut hic provident. Ipsam harum omnis iusto, ab repellat impedit, dicta quod libero qui temporibus non.</CardText>
                                        <CardFooter className="card-text"><small className="text-muted">Last updated 3 mins ago</small></CardFooter>
                                    </CardBody>
                                    </Card>


                                    <Card className="card col buddha">
                                    <CardImg className="card-img-top" src="../assets/images/manmassage.jpg" alt="woman floating in water" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title">Bronze Package</CardTitle>
                                        <CardText className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloremque quibusdam placeat cupiditate vero ut hic provident. Ipsam harum omnis iusto, ab repellat impedit, dicta quod libero qui temporibus non.</CardText>
                                        <CardFooter className="card-text"><small className="text-muted">Last updated 3 mins ago</small></CardFooter>
                                    </CardBody>
                                    </Card>
                            </div>
                        </div>
                    </CardDeck>
            </React.Fragment>
        );
    }
}

export default Services;