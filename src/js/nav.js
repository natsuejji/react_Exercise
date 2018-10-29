import React from 'react';
import navlinklist from './var.js';
import {Navbar, Nav, NavbarBrand} from 'reactstrap';
export default  class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Navbar color="dark" dark expand="md" className={'fixed-top'}>
            <NavbarBrand href="#">
              完美姆咪世界
            </NavbarBrand>
          
        </Navbar>
      
    );
  }
}

