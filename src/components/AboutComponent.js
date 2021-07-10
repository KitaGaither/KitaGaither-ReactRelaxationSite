import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const About = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div>
                <h2 className="text-center">Learn More About Our Mission!</h2>
            </div>

        <div>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                Find out how we got started!
            </Button>   
                <Collapse isOpen={!isOpen}>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dignissimos perferendis. Quae, eos! At inventore nam provident! Repellendus, et obcaecati fuga expedita quisquam labore cumque laboriosam temporibus, ratione illum reprehenderit!
                        </CardBody>
                    </Card>
                </Collapse>
        </div> 

        <div>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                Find out how we got started!
            </Button >   
                <Collapse isOpen={!isOpen}>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dignissimos perferendis. Quae, eos! At inventore nam provident! Repellendus, et obcaecati fuga expedita quisquam labore cumque laboriosam temporibus, ratione illum reprehenderit!
                        </CardBody>
                    </Card>
                </Collapse>
        </div> 

        <div>
            <Button onClick={toggle} style={{ marginBottom: '1rem' }}>
                Find out how we got started!
            </Button>   
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dignissimos perferendis. Quae, eos! At inventore nam provident! Repellendus, et obcaecati fuga expedita quisquam labore cumque laboriosam temporibus, ratione illum reprehenderit!
                        </CardBody>
                    </Card>
                </Collapse>
            </div> 
        </div>
    );
}
export default About;