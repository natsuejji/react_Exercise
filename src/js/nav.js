import React from 'react';
import linklist from './var.js';
import {Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
export default  class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const list = linklist
    const currentUrl = function(curl){
        var url = './'+window.location.pathname.split('/').reverse()[0];
        if(url == './' && curl =='./index.html') return true
        else return (curl == url)  
    }
    const link = list.map(function (link, index) {
        return <NavItem key={index} className={'col-sm-12 col-md-auto'}  ><NavLink className={currentUrl(link.url)? 'active': ''} href={ link.url} >{link.name}</NavLink></NavItem>
    });
    return (
        <Navbar color="dark" dark expand="md" className={'fixed-top'}>
        
          <NavbarBrand href="#">
            完美姆咪世界
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                {link}
              </Nav>
            </Collapse>
        </Navbar>
      
    );
  }
}

