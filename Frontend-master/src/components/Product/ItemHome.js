import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import ViewCart from "./ViewCart";
import {BrowserRouter as Router} from "react-router-dom";
import MyAccount from "../ProjectTask/MyAccount";

import Comment from "./Comment";

class ItemHome extends Component {
    render() {
        return (
            <div className={"container"} >
                <div className={"row"}>

                    <div className="card card-body my-3 col-sm-4">
                        <img className="card-img-top"  alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text">Details </p>
                        </div>
                        {/*<ul className="list-group list-group-flush">*/}
                        {/*    <li className="list-group-item">Cras justo odio</li>*/}
                        {/*    <li className="list-group-item">Dapibus ac facilisis in</li>*/}
                        {/*    <li className="list-group-item">Vestibulum at eros</li>*/}
                        {/*</ul>*/}
                        <div className="card-body">
                            {/*<Link  to="/ViewCart" className="btn btn-primary btn-block"></Link>*/}

                            <button type="button" className="btn btn-primary btn-block">Add To Cart</button>

                            <button type="button" className="btn btn-primary btn-block">Add To Wish List</button>
                            <Link to="/Comment" className="btn btn-info btn-block">Comment & Reviews</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemHome;