import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "../admin.css";
import NavBar from "./NavBar";



function Navigationbar() {

    return (


        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            {/*<a className="navbar-brand" href="#">*/}
            {/*    <img src="https://dcassetcdn.com/design_img/239800/63899/63899_2430670_239800_image.jpg" height="70" width="80"  alt=""/>*/}
            {/*</a>*/}

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-dark">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/Products">PRODUCTS</Nav.Link>

                        <Nav.Link><Link to="/ViewCart"><i className="fas fa-shopping-cart"></i></Link></Nav.Link>

                        <Nav.Link href="">CHECKOUT</Nav.Link>
                        <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="">WISHLIST</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/AdminAsCategory/AddCategory" >ADD PRODUCTS TYPES</NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Admin" >ADD STORE MANAGERS </Link></NavDropdown.Item>

                    </NavDropdown>
                        <Nav.Link href="/Offers">OFFERS</Nav.Link>
                        <Nav.Link href="/WhishList_Admin/WishListSave"><i className="fas fa-heart"></i></Nav.Link>
                    </Nav>

                        <div>
                            {sessionStorage.getItem("sessionName") === null?
                                <Nav>
                                    <Nav.Link ><Link to="/Register" >REGISTER</Link></Nav.Link>
                                    <Nav.Link ><Link to="/login" >SIGN IN</Link></Nav.Link>
                                 </Nav>
                                :<div className=" m-auto alert-dark">
                                    <h6 id="login">Welcome</h6>
                                    <h6 id="login">{sessionStorage.getItem("sessionName")}</h6>
                                    <Nav.Link href="/MyAccount"><i className="fas fa-user-circle "> My Account </i></Nav.Link>
                                    <button className="btn-danger btn-block " onClick={onClickMethod}>
                                        <i className="fas fa-sign-out-alt">Log Out</i></button>

                                </div>}
                        </div>
                </Navbar.Collapse>
                <br/>
                <br/>
            </Navbar>



        );

}
function onClickMethod(){
    window.localStorage.setItem('CREDENTIALS_FLUSH', Date.now().toString())
    window.localStorage.removeItem('CREDENTIALS_FLUSH')
    console.log("sign out");
    sessionStorage.clear();
    window.location.replace("/login");

}
export default Navigationbar;
