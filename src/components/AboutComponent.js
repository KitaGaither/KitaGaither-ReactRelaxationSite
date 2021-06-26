import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <React.Fragment>
               <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center router-h2">Learn More About Our Mission!</h2>
                    </div>
                    </div>
                </div>
                
                <div id="accordion">
                <div className="Card">
                    <div role="tab" className="card-header">
                        <h4>
                            <a className="collapsed primary-text" data-toggle="collapse" data-target="#gotStarted">
                                Find out how we got started!
                            </a>
                        </h4>
                        <div className="collapse" id="gotStarted" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dignissimos perferendis. Quae, eos! At inventore nam provident! Repellendus, et obcaecati fuga expedita quisquam labore cumque laboriosam temporibus, ratione illum reprehenderit!</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="Card">
                    <div role="tab" className="card-header">
                        <h4>
                            <a className="collapsed primary-text" data-toggle="collapse" data-target="#ourPlan">
                                Our plan to change the world
                            </a>
                        </h4>
                        <div className="collapse" id="ourPlan" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum quidem repellat assumenda sapiente quod minus vel libero perferendis, omnis a ea quae minima. Nesciunt, aut voluptates. Natus, dolorum deserunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Card">
                    <div role="tab" className="card-header">
                        <h4>
                            <a className="collapsed primary-text" data-toggle="collapse" data-target="#youHelp">
                                How you can help
                            </a>
                        </h4>
                        <div className="collapse" id="youHelp" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet ad impedit, voluptatum dolore dignissimos, accusamus repudiandae dicta, molestiae ducimus voluptate omnis voluptatibus aut iusto quibusdam alias. Velit, vel sint.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            </React.Fragment>
        );
    }
}

export default About;