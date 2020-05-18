import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {deleteAccount} from "../../actions/projectTaskActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_1:[],
            user:sessionStorage.getItem("sessionName")
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('/api/Users/name/'+sessionStorage.getItem("sessionName"))
            .then(responce =>{
                this.setState({
                    user_1: responce.data,

                });
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    onDeleteClick(id){
        axios.delete("/api/Users/delete/" + id).then((response) => {
            window.location.replace("/")
        });
    }

    onClickMethod=()=>{
        window.localStorage.setItem('CREDENTIALS_FLUSH', Date.now().toString())
        window.localStorage.removeItem('CREDENTIALS_FLUSH')
        console.log("sign out");
        sessionStorage.clear();
        window.location.replace("/login");

    }




    render() {
        if(sessionStorage.getItem("sessionName")!==null) {
            return (
                <div>
                    <div className="container">
                    <div className="card">
                        <div className="col-md-6">
                        <div className="card-header">
                            <h2 className="text-left m-auto">My Account</h2>
                            <button className="text-right"><Link to="/ResetPassword">Reset Password</Link></button><button className="text-right"><Link to="/EditProfile">Edit Profile</Link></button>
                        </div>
                            <img className="card-img-top" src="" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Name:{sessionStorage.getItem("sessionName")}</h4>
                                                <p className="card-text text-truncate">
                                                    Email:{this.state.user_1.email}
                                                </p>
                                        <button className="btn btn-primary">Delete Account</button>
                                            </div>
                            </div>
                            </div>

                    </div>
                </div>
            );
        }else{
            return (<div> {window.location.replace("/login")} </div>);
        }

    }
}
export default MyAccount;