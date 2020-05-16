import React, {Component} from 'react';
import WishList from "./WishList";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addToWishList} from "../../actions/actions";
import axios from "axios";
import qs from 'query-string';

class WishListSave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName:"",
            user:"",
            name:"",

        };
        console.log(this.props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        axios.get('http://localhost:8080/api/Products/'+qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k)
            .then(response =>{
                this.setState({
                    name : response.data.name

                });
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();

        if(sessionStorage.getItem("sessionName")!=null) {
            const newWishList = {
                productName:this.state.name,
                user: sessionStorage.getItem("sessionName")
            };
            console.log(newWishList);
            this.props.addToWishList(newWishList, this.props.history);
        }else{
            alert("Please Login or Register to add Item to WishList!!!");
        }
    }

    render() {
        return (

                   <div className="container">
                       <div className="row">
                           <div className="col">
                               <h2>My Wish List</h2>
                               <form onSubmit={this.onSubmit}>
                                   <button type={"submit"}
                                           className={"btn btn-block btn-primary mt-3" }>
                                      Ok
                                   </button>
                               </form>
                           </div>
                           <ul className={"list-group my-5 "}>
                               <WishList/>
                           </ul>
                       </div>
                   </div>
                   /*bnn*/
                   /*<div className="container">
                       <h2>My Wish List</h2>
                       <button type="button" className="btn btn-outline-indigo" data-toggle="modal" data-target="#myModal">Open My Wish List</button>
                   <div className="modal fade" id="myModal" role="dialog">
                       <div className="modal-dialog modal-lg">
                           <div className="modal-content">
                               <div className="modal-header">
                                   <button type="button" className="close" data-dismiss="modal" >&times;</button>
                                   <div className="modal-body">
                                       <ul className={"list-group my-5 "}>
                                           <WishList/>
                                       </ul>
                                   </div>
                                   <div className="modal-footer">
                                       <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>*/
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
