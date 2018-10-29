import React from 'react';
import navlinklist from './var.js';
import {Nav, Col, NavLink, NavItem} from 'reactstrap';


export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
	}

    render() {
        return (
            <aside>
                <Col>
                    <Nav pills className={'flex-column'}>                        
                        <h3></h3>
                        <NavItem ><NavLink href="./index.html" active>top</NavLink></NavItem>
                        <NavItem ><NavLink href="./music.html" >music</NavLink></NavItem>
                        <NavItem ><NavLink href="#" >0</NavLink></NavItem>
                        <NavItem ><NavLink href="#" >0</NavLink></NavItem>
                        <NavItem ><NavLink href="#" >0</NavLink></NavItem>
                        <NavItem ><NavLink href="#" >0</NavLink></NavItem>
                    </Nav>
                </Col>
            </aside>
        );
    }
}
