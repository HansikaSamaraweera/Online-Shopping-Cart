import React, {Component} from 'react';
import ItemHome from "./ItemHome";
import CartList from "./CartList";
import {Link, Route} from "react-router-dom";
import axios from "axios";

const Message = props => (
    <li className={"list-group-item text-capitalize d-flex justify-content-between my-2"}>
        <p>{props.todo.itemNo}</p>
        <h6>{props.todo.pname}</h6>
        <p className={"text-sm-left"}>{props.todo.price}</p>
        <div className={"todo-icon"}>

                    <span className={"mx-2 text-danger"}>
                        <i className={"fas fa-trash"}></i>
                    </span>

        </div>
    </li>
);


class ViewCart extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            cart:[],
            user:sessionStorage.getItem("sessionName"),
            day :(new Date().getDate() + "/"+ parseInt(new Date().getMonth()+1) +"/"+ new Date().getFullYear()).toLocaleString(),
            curTime : new Date().toLocaleString()
        };
    }

componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.state.day);
    axios.get('http://localhost:8080/cart/name/'+sessionStorage.getItem("sessionName"))
        .then(responce =>{
            this.setState({cart: responce.data});
        })
        .catch(function (error) {
            console.log(error)
        })

}
    cartList(){
        return this.state.cart.map(function (current,i) {
            return <Message todo={current} key={i}/>;
        });
    }
// {params:{user : this.state.user  }}
    render() {

        return (

            <div className={"container"}>
            <h2 className={"text-capitalize text-center card card-body my-3 bg-info text-white"}>{this.state.user}  Your Cart</h2>
                <h5 className={"text-capitalize text-center"}>{this.state.day}</h5>
            <div className={"row"}>
            <div className={" col-10 mx-auto col-md-12 mt-4 jumbotron"}>
                <ul className={"list-group my-5 "}>
                {/*<CartList/>*/}
                    {this.cartList()}
                </ul>
                <div className="card bg-secondary text-white">
                    <div className="card-body">
                        Total Price
                    </div>
                </div>
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
