import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import qs from "query-string";

class WishList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            category:"",
            price:"",
            id:"",
            photo:"",
            itemNo : "",
            wishList:[],
            productid:"",
            user:sessionStorage.getItem("sessionName")
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('/wishList/name/'+sessionStorage.getItem("sessionName"))
            .then(responce =>{
                this.setState({
                    wishList: responce.data,

                });
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    onDeleteClick(id){
        if(window.confirm('Do you want to delete this Item from the wishlist')) {
            axios.delete("/wishList/delete/" + id).then((response) => {
                window.location.replace("/")
            });
        }
    }
    onAddtocart(id){
        //Need to get the details by giving product id then store in state
        axios.get(' /api/Products/'+id)
            .then(responce =>{
                this.setState({
                    name : responce.data.name,
                    category : responce.data.category,
                    price: responce.data.price,
                    id : responce.data.id,
                    photo: responce.data.photo
                });
                console.log(this.state.name);
            })
            .catch(function (error) {
                console.log(error)
            })
            //get the state data and
            //*******************************************************
            //store the data in mycart table
            //store below data in my cart
            const newCart = {
                itemNo: this.state.id,
                pname: this.state.name,
                user: sessionStorage.getItem("sessionName"),
                price: this.state.price,
                date: this.state.curTime
            };
            //********************************************************


    }

    render() {
        const {wishList}=this.state;
        const wishlist =this.state.wishList.map((wish) => {
                    return (
                        <div className={"container"}>
                                <div className="card card-body my-3 col-sm-4 m-auto">
                                    <h6>Item Name:{wish.productName}</h6>
                                    <h6>Price:{wish.price}</h6>
                                    <div className="card-body">
                                        <button type="button" className="btn btn-danger text-white btn-block"
                                                onClick={this.onDeleteClick.bind(this, wish.id)}>Remove
                                        </button>
                                        {/*<Link to={"/ViewCart/"}
                                              className="btn btn-danger text-white btn-block">Add To Cart</Link>*/}
                                        {/*below product id is wish list product id*/}
                                        <button type="button" className="btn btn-danger text-white btn-block"
                                                onClick={this.onAddtocart.bind(this, wish.productid)}>Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                    )
            }
        );

        return (
            <div className={"container"}>
                <div><h2 className="text-capitalize card card-body bg-info text-white">My WishList</h2></div>
                {wishlist}
            </div>
        );
    }
}
export default WishList;


