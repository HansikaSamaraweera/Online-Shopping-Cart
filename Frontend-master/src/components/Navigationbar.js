import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../admin.css";
import icons8 from "./images/icons8.png"

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

                        <Nav.Link><Link to="/ViewCart"><i className="fas fa-shopping-cart"></i></Link></Nav.Link>

                        <Nav.Link href="#pricing">CHECKOUT</Nav.Link>
                        <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">WISHLIST</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/AdminAsCategory/AddCategory" >ADD PRODUCTS TYPES</NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Admin" >ADD STORE MANAGERS </Link></NavDropdown.Item>

                    </NavDropdown>
                        <Nav.Link><Link to="/WishList"><i className="fas fa-heart"></i></Link></Nav.Link>
                    </Nav>

                        <div>
                            {sessionStorage.getItem("sessionName") === null?
                                <Nav>
                                    <Nav.Link ><Link to="/Register" >REGISTER</Link></Nav.Link>
                                    <Nav.Link ><Link to="/login" >SIGN IN</Link></Nav.Link>
                                 </Nav>
                                :<div className=" m-auto alert-dark">
                                    <p id="login">Welcome</p>
                                    <h5 id="login">{sessionStorage.getItem("sessionName")}</h5>
                                    <Nav.Link href="/MyAccount"><i className="fas fa-user-circle"> My Account </i></Nav.Link>

                                </div>}
                        </div>
                </Navbar.Collapse>
                <br/>
                <br/>
            </Navbar>



        );

}
export default Navigationbar;
