import React, {Component} from 'react';
import WishList from "./WishList";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addToWishList} from "../../actions/actions";
import axios from "axios";
import qs from 'query-string';
import {Link} from "react-router-dom";
import classnames from "classnames";

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
            alert("Added to WishList!")
        }
    }

    handleOnClick(){

        this.props.history.push('/WhishList_Admin/WishList/'+this.state.id)
    }

    render() {
        return(
        <div className="col-md-7 m-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <br/>
                        <h1 className="text-center" id="tit"> My Wish List</h1>
                        <div className="card card-body my-5 col-sm-11">
                            <div className="card-body">
                                <h5 className="card-title">Item Name:{this.state.name} </h5>
                                <h6 className="card-text">Price:{this.state.price} </h6>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <button type="submit" className="btn btn-primary btn-block" onClick={'/WhishList_Admin/WishList'+this.state.id} >Save</button>
                                    <Link to="/WhishList_Admin/WishList" className="btn btn-block btn-danger m-auto">
                                        More Actions <i className="fas fa-arrow-alt-circle-right"></i>
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
