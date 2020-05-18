import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";


class NavBar extends Component {
    render() {
        return (
            <div>

                <div className="card bg-dark text-white">
                    <div className=" d-flex justify-content-center">
                    <a className="navbar-brand" href="#">
                        <img src="https://cdn3.vectorstock.com/i/1000x1000/12/57/fashion-store-logo-design-template-clothes-shop-vector-23611257.jpg" height="120" width="130"  alt=""/>
                    </a>
                    <div className="card-body">
                        <h2>Online Fashion Store</h2>
                        <h6>Choose Your Look...</h6>
                    </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default NavBar;
