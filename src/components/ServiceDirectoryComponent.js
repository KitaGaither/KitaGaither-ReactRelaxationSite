import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import JumbotronHeader from './JumbotronHeaderComponent';

class ServiceDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedService: null
        };
    }
    onServiceSelect(service) {
        this.setState({selectedService: service});
    }

    renderSelectedService(service) {
        if (service) {
            return (
                <Card>
                    <CardImg top src={service.image} alt={service.name} />
                    <CardBody>
                        <CardTitle>{service.name}</CardTitle>
                        <CardText>{service.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const servicedirectory = this.props.service.map(service => {
            return (
                <div key={service.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onServiceSelect(service)}>
                        <CardImg width="100%" src={service.image} alt={service.name} />
                        <CardImgOverlay>
                            <CardTitle>{service.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {servicedirectory}
                </div>
                <JumbotronHeader />
            </div>
        );
    }
}

export default ServiceDirectory;











