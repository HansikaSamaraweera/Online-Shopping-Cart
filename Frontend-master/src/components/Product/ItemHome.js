import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import ViewCart from "./ViewCart";
import {BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import productList from "../item/ProductList";

const Product = props => (
 <div className={"row justify-content-center"}>
<div className="card card-body my-3 col-sm-4">
    <img className="card-img-top" src="https://rukminim1.flixcart.com/image/332/398/k4hcjgw0/top/y/x/w/m-cm-kt69-cobio-man-original-imafn4xfvjgmagqa.jpeg?q=50" alt="Card image cap">

    </img>
</div>
    <div className="card card-body my-3 col-sm-4">

        <div className="card-body">
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><h5 className="card-title">{props.todo.name}</h5></li>
            <li className="list-group-item"><p className="card-text">{props.todo.category} </p></li>
            <li className="list-group-item"><h6 className="card-text">Rs.{props.todo.price}</h6></li>
            {/*<h6 className="card-text">{props.todo.id}</h6>*/}
            </ul>
        </div>
        <div className="card-body">
            {/*<Link  to="/ViewCart" className="btn btn-primary btn-block"></Link>*/}

            <Link to={"/ViewProduct/id?_k="+props.todo.id} className="btn btn-info btn-block">Add To Cart</Link>

            <Link to={"/WhishList_Admin/WishListSave/id?_k="+props.todo.id} className="btn btn-primary btn-block">Add To Wish List</Link>
            <Link to={"/Comment/id?_k="+props.todo.id} className="btn btn-info btn-block">Comment & Reviews</Link>

        </div>
        </div>
    </div>




);



class ItemHome extends Component {

    constructor(props) {
        super(props);
        this.state = {pro : []};
    }


    componentDidMount() {
        axios.get(" /api/Products/all")
            .then(responce =>{
                this.setState({pro : responce.data});
            })
            .catch(function (error) {
                console.log(error)
            })
    }
productList(){
        return this.state.pro.map(function (current,i) {
                return <Product todo={current} key={i}/>
        });
}

    render() {
        return (

                    <div>
                    <div className={"container "} >
                    {/*<div className={"row "}>*/}
                    {/*<div className={"col"} style={{backgroundColor:"lavender"}}>*/}

                        {this.productList()}
                    </div>

                    </div>
                    // </div>
                    // </div>

        );
    }
}

export default ItemHome;
