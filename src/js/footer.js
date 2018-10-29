import React from 'react';
import {Navbar, Nav, NavbarBrand} from 'reactstrap';
export default class MyFooter extends React.Component {
    constructor(props) {
		super(props);
	}

    render() {
        const footstyle={
            textAlign:'center'
        }
        return (
            <footer style={ footstyle} className={'text-white bg-dark'}>
                <span> 製作中</span>
            </footer>
        );
    }
}
