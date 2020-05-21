import React, {Component} from 'react';
import ItemHome from "./ItemHome";
import CartList from "./CartList";
import {Link, Route} from "react-router-dom";
import axios from "axios";

// const Message = props => (
//
//     <li className={"list-group-item text-capitalize d-flex justify-content-between my-2"}>
//         <p>{props.todo.itemNo}</p>
//         <h6>{props.todo.pname}</h6>
//         <p className={"text-sm-left"}>{props.todo.price}</p>
//         <div className={"todo-icon"}>
//
//                     <span className={"mx-2 text-danger"}>
//                         <i className={"fas fa-trash"}> <button type="button" onClick={this.onDeleteClick.bind(this,props.todo.id)}> </button></i>
//                     </span>
//
//         </div>
//     </li>
// );


class ViewCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart:[],
            user:sessionStorage.getItem("sessionName"),
            day :(new Date().getDate() + "/"+ parseInt(new Date().getMonth()+1) +"/"+ new Date().getFullYear()).toLocaleString(),
            curTime : new Date().toLocaleString(),
            total: 0
        };
    }

componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.state.day);
    axios.get('/cart/name/'+sessionStorage.getItem("sessionName"))
        .then(responce =>{
            this.setState({
                cart: responce.data,

            });
        })
        .catch(function (error) {
            console.log(error)
        })

}

calculate(price){
    this.state.total = Number(price) + this.state.total;

}


    // onClearArray = () => {
    //     this.setState({ cart: [] });
    // };

    onDeleteClick(id){
            axios.delete("/cart/delete/" + id).then((response) => {
                window.location.replace("/ViewCart")
            });
    }

    render() {

        let list =this.state.cart.map((current) => {
            this.calculate(current.price);
                return (
                    <li className={"list-group-item text-capitalize d-flex justify-content-between my-2"}>
                        {/*<p>{current.itemNo}</p>*/}
                        <h6>{current.pname}</h6>
                        <p className={"text-sm-left"}>{current.price}</p>
                        <div className={"todo-icon"}>

                            <button type="button" onClick={this.onDeleteClick.bind(this,current.id)}>
                    <span className={"mx-2 text-danger"}>
                        <i className={"fas fa-trash"}>  </i>
                    </span>
                            </button>
                        </div>
                    </li>
                )
            }
        );

        return (

            <div className={"container"}>
            <h2 className={"text-capitalize text-center card card-body my-3 bg-info text-white"}>{this.state.user}  Your Cart</h2>
                <h5 className={"text-capitalize text-center"}>{this.state.day}</h5>
            <div className={"row"}>
            <div className={" col-10 mx-auto col-md-12 mt-4 jumbotron"}>
                <ul className={"list-group my-5 "}>
                {/*<CartList/>*/}
                {/*    {this.cartList()}*/}
                    {list}
                </ul>
                    <hl className="text-dark"/>

                    <div className="d-flex justify-content-lg-between my-5 ">

                        <h5>Total price</h5>
                            <h5>Rs.{this.state.total}</h5>

                    </div>
                        <Link to={"/Payment/id?_k="+this.state.total} className="btn btn-info btn-block">Payment</Link>
                        {/*<button type="button" className="btn btn-info btn-block"   onClick={this.payment}>Payment</button>*/}
                        {/*<button type="button" className="btn btn-primary btn-block" onClick={this.onClearArray}>CheckOut</button>*/}
                        <Link  to="/" className="btn btn-info btn-block">
                            Edit Cart
                        </Link>


            </div>
        </div>

        </div>
        );
    }
}

export default ViewCart;
