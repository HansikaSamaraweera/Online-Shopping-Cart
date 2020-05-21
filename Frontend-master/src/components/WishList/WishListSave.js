import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addToWishList} from "../../actions/actions";
import axios from "axios";
import qs from 'query-string';
import {Link} from "react-router-dom";


class WishListSave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: "",
            user: "",
            name: ""

        };
        this.onSubmit = this.onSubmit.bind(this);
        //alert(qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k);
    }

    componentDidMount() {

        axios.get('/api/Products/' + qs.parse(this.props.location.search, {ignoreQueryPrefix: true})._k)
            .then(responce => {
                this.setState({
                    name: responce.data.name,
                    price: responce.data.price,
                });
                console.log(this.state.name);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onSubmit(e) {
        e.preventDefault();
        if (sessionStorage.getItem("sessionName") == null) {
            alert("You Should Register or Login First!!!")
            window.location.replace("/Login")
        } else {
            const newWishList = {
                productName: this.state.name,
                user: sessionStorage.getItem("sessionName"),
                price: this.state.price
            };
            this.props.addToWishList(newWishList, this.props.history)
            alert("Save to WishList!")
        }
    }

    handleOnClick(){

        this.props.history.push('/WhishList_Admin/WishList/'+this.state.id)
    }

    render() {
        return(
        <div className="col-md-7 m-auto">
            <div className="container">
                <h2 className="text-capitalize card card-body bg-info text-white "> My Wish List</h2>
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <br/>
                        <div className="card card-body my-5 col-sm-11">
                            <div className="card-body">
                                <h5 className="card-title">Item Name:{this.state.name} </h5>
                                <h6 className="card-text">Price:{this.state.price} </h6>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <button type="submit" className="btn btn-info btn-block" onClick={'/WhishList_Admin/WishList'+this.state.id} >SAVE TO WISHLIST</button>
                                    <Link to="/" className="btn btn-block btn-danger m-auto">
                                        <i className="fas fa-arrow-alt-circle-left"></i>  RETURN TO SHOP
                                    </Link>
                                </form>
                            </div>
                        <p><br/><br/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
addToWishList.propTypes ={
    addToWishList:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
});

export default connect(mapStateToProps,{addToWishList}) (WishListSave);
