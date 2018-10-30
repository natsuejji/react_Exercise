import React from 'react';
import linklist from './var.js';
import {Nav, Col, Row, NavLink, NavItem} from 'reactstrap';


export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
	}

    render() {
        const list = linklist
        const currentUrl = function(curl){
            var url = './'+window.location.pathname.split('/').reverse()[0];
            if(url == './' && curl =='./index.html') return true
            else return (curl == url)  
        }
        const link = list.map(function (link, index) {
            return <NavItem key={index}  ><NavLink className={currentUrl(link.url)? 'active': ''} href={ link.url} >{link.name}</NavLink></NavItem>
        });

        const navColorStyle={
            backgroundColor :'#e3f2fd'
            
        }
        return (
            <aside  style={navColorStyle} className={'h-100'}>
                <Row>
                    <Col className={'mt-4'}>
                        <Nav pills className={'flex-column'}>                        
                            {link}
                        </Nav>
                    </Col>
                </Row>
            </aside>
        );
    }
}
