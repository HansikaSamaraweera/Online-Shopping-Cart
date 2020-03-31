import React from 'react';
import {Nav,NavItem,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Navigationbar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <a className="navbar-brand" href="#">
                <img src="https://dcassetcdn.com/design_img/239800/63899/63899_2430670_239800_image.jpg" height="70" width="80"  alt=""/>
            </a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/">PRODUCTS</Nav.Link>
                        <Nav.Link href="#pricing">MY CART</Nav.Link>
                        <Nav.Link href="#pricing">CHECKOUT</Nav.Link>
                        <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">WISHLIST</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">ADD PRODUCTS TYPES</NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Admin" >ADD STORE MANAGERS </Link></NavDropdown.Item>

                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link ><Link to="/Register" >REGISTER</Link></Nav.Link>
                        <Nav.Link ><Link to="/login" >SIGN IN</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <br/>
                <br/>
            </Navbar>



        );

}
export default Navigationbar;
