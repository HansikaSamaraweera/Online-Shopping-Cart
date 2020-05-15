import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import ViewCart from "./ViewCart";
import {BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import productList from "../item/productList";

const Product = props => (

    <div className={"container"} >
        <div className={"row"}>
        <div className={"col"} style={{backgroundColor:"lavender"}}>
    <div className="card card-body my-3 col-sm-4">
        <img className="card-img-top"  alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{props.todo.name}</h5>
            <p className="card-text">{props.todo.category} </p>
            <h6 className="card-text">{props.todo.price}</h6>
            <h6 className="card-text">{props.todo.id}</h6>
        </div>
        {/*<ul className="list-group list-group-flush">*/}
        {/*    <li className="list-group-item">Cras justo odio</li>*/}
        {/*    <li className="list-group-item">Dapibus ac facilisis in</li>*/}
        {/*    <li className="list-group-item">Vestibulum at eros</li>*/}
        {/*</ul>*/}
        <div className="card-body">
            {/*<Link  to="/ViewCart" className="btn btn-primary btn-block"></Link>*/}

            <button type="button" className="btn btn-primary btn-block">Add To Cart</button>

            <Link to={"/WhishList_Admin/WishList/id?_k="+props.todo.id} className="btn btn-primary btn-block">Add To Wish List</Link>
            <Link to={"/Comment/id?_k="+props.todo.id} className="btn btn-info btn-block">Comment & Reviews</Link>


        </div>
    </div>
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
        axios.get("http://localhost:8080/api/Products/all")
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
                        {this.productList()}
                    </div>



        );
    }
}

export default ItemHome;
