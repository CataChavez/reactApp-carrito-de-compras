import React from 'react';
import {NavItem, Nav, NavbarBrand, Navbar} from 'reactstrap';
import Cart from './Cart';
import './NavBar.css';
import logo from '../logo.png'

class NavBar extends React.Component{

    render(){
        return(
            <Navbar color="dark" dark expand="mr-auto" >
                <NavbarBrand href="/">
                    <img src={logo} alt={logo} className="logo"/></NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <Cart/>
                    </NavItem>
                  </Nav>
            </Navbar>
        );
    }
}

export default NavBar;