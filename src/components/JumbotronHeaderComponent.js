import React, { Component } from 'react';

class JumbotronHeader extends Component {

    render() {
        return (
            <div>
                <header class="jumbotron jumbotron-fluid">
                    <h1>Relaxation Spa</h1>
                    <h6>SPIRIT | MIND | BODY</h6>
                    <p class="text-center">Ask about our specials!</p>
                    <div class="text-right">
                        <button type="button" class="btn">
                            <a id="reserveButton" role="button" class="btn btn-lg text-white text-nowrap">Book Here</a>
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}

export default JumbotronHeader;