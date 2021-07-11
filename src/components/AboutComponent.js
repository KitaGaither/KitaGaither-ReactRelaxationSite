import React, { Component } from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';


class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="text-center pink-h2">Learn More About Our Mission!</h2>
                <Card className="card buddha">
                    <CardImg className="card-img-top" src="../assets/images/buddha.jpg" alt="stones on back" />
                    <CardBody className="card-body">
                    </CardBody>
                </Card>

                <div className="about-text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, adipisci dolorem! Qui, nobis accusamus ad inventore quis at nisi! Aliquid aut optio voluptates in eligendi quisquam, nam nisi impedit harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate dolore excepturi, possimus quaerat eaque autem eos nesciunt adipisci neque saepe repellat voluptates accusantium ipsa, qui omnis veritatis reprehenderit odit!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, et officiis at eos commodi debitis labore optio perferendis corrupti expedita incidunt fuga, eius voluptas? Ex ullam modi repudiandae eos deleniti!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium magni animi fugiat reprehenderit corporis laudantium similique voluptates soluta molestiae, inventore dolores unde harum illum? Molestiae saepe dolores molestias esse?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nesciunt neque ab laborum corporis eius sapiente, iure ex placeat unde exercitationem perferendis cumque ullam accusantium consequuntur, cum cupiditate quod rerum.
                </p>
                </div>
            </React.Fragment>  
        );
    
    }
}
export default About;