import React from 'react';
import {Jumbotron} from 'reactstrap';
export default class MyJumbotron extends React.Component {
    constructor(props) {
		super(props);
	}

    render() {
        return (
            <header>
                <Jumbotron style={this.props.backimg}>
                    <h1 className={'jumbotron-font'}>web programming homework - bootstrap</h1>
                </Jumbotron>  
            </header>
        );
    }
}
