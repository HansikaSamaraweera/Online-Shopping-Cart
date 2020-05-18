import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class WishList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wishList:[],
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
        axios.delete("/wishList/delete/" + id).then((response) => {
            window.location.replace("/")
        });
    }

    render() {

        const wishlist =this.state.wishList.map((current) => {
                return (
                    <div className={"container"} >
                        <div className={"row"}>
                            <div className="card card-body my-3 col-sm-4">
                            <h6>Item Name:{current.productName}</h6>
                            <h6>Price:{current.price}</h6>
                            <div className="card-body">
                                <button type="button" className="btn btn-danger text-white btn-block" onClick={this.onDeleteClick.bind(this,current.id)}>Remove</button>
                                <Link to={"/ViewProduct/id?_k="+current.id} className="btn btn-danger text-white btn-block">Add To Cart</Link>
                        </div>
                            </div>
                    </div>
                    </div>
                )
            }
        );

        return (

            <div className={"container"}>
                {wishlist}
            </div>
        );
    }
}
export default WishList;


