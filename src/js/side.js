import React from 'react';
import linklist from './var.js';
import {Nav, Col, NavLink, NavItem} from 'reactstrap';


export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
	}

    render() {
        const list = linklist
        const currentUrl = function(curl){
            var url = './'+window.location.pathname.split('/').reverse()[0];
            console.log(url,curl)
            if(url == './' && curl =='./index.html') return true
            else return (curl == url)  
        }
        const link = list.map(function (link, index) {
            return <NavItem key={index}  ><NavLink className={currentUrl(link.url)? 'active': ''} href={ link.url} >{link.name}</NavLink></NavItem>
        });
        return (
            <aside>
                <Col>
                    <Nav pills className={'flex-column'}>                        
                        <h3> 選單</h3>
                        {link}
                    </Nav>
                </Col>
            </aside>
        );
    }
}
