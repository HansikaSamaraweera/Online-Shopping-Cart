import React, {Component} from 'react';
import ItemHome from "./ItemHome";
import CartList from "./CartList";
import {Link, Route} from "react-router-dom";

class ViewCart extends Component {



    render() {

        return (

            <div className={"container"}>
            <h2 className={"text-capitalize text-center card card-body my-3 bg-info text-white"}>Your Cart</h2>
            <div className={"row"}>
            <div className={" col-10 mx-auto col-md-12 mt-4 jumbotron"}>
                <ul className={"list-group my-5 "}>
                <CartList/>
                </ul>
            </div>
                <div className={"container"}>
                <div className={"card bg-light"}>
                    <div className={"card-body"}>
                    <button type="button" className="btn btn-success btn-block">Payment</button>

                        <Link  to="/" className="btn btn-primary btn-block">
                            Edit Cart
                        </Link>
                    </div>
                </div>
                </div>
        </div>

        </div>
        );
    }
}

export default ViewCart;
