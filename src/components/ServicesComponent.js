import React, { Component } from 'react';
import { Card, CardDeck, CardImg, CardBody, CardFooter, CardTitle, CardText } from 'reactstrap';

class Services extends Component {
    render() {
        return(
            <React.Fragment>

                <h2 className="text-center pink-h2">What kind of Massage Would You Like?</h2> 

                    <CardDeck className="card-deck buddha">

                        <div classNameName="container">
                            <div className="row">

                                <div classNameName="col-md-4 buddha">
                                    <Card className="card">
                                    <CardImg className="card-img-top" src="../assets/images/sparobe.jpg" alt="stones on back" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title">Gold Package</CardTitle>
                                        <CardText className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas doloremque quibusdam placeat cupiditate vero ut hic provident. Ipsam harum omnis iusto, ab repellat impedit, dicta quod libero qui temporibus non.</CardText>
                                        <CardFooter className="card-text"><small className="text-muted">Last updated 3 mins ago</small></CardFooter>
                                    </CardBody>
                                    </Card>
                                </div>


                                <div classNameName="col-md-4 buddha">
                                    <Card className="card">
                                    <CardImg className="card-img-top" src="../assets/images/flowers.jpg" alt="lotion" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title">Silver Package</CardTitle>
                                        <CardText className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quod sed ratione. A nihil totam voluptate in dignissimos sequi doloremque suscipit vel quae? Sequi accusamus incidunt ab dolores nulla molestiae.</CardText>
                                        <CardFooter className="card-text"><small className="text-muted">Last updated 3 mins ago</small></CardFooter>
                                    </CardBody>
                                    </Card>
                                </div>


                                <div classNameName="col-md-4 buddha">
                                    <Card className="card">
                                    <CardImg className="card-img-top" src="../assets/images/manmassage.jpg" alt="footbath" />
                                    <CardBody className="card-body">
                                        <CardTitle className="card-title">Bronze Package</CardTitle>
                                        <pCardText className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam numquam ex inventore maiores porro atque, architecto veritatis beatae quaerat impedit. Ut quo dolore, animi earum labore error eos laborum illo!</pCardText>
                                        <CardFooter className="card-text"><small className="text-muted">Last updated 3 mins ago</small></CardFooter>
                                    </CardBody>
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