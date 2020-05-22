import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {bindActionCreators} from "redux";
import acc from "../images/acc.png";


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
        if (window.confirm('Do you want to delete this account')) {
            axios.delete("/api/Users/delete/" + id).then((response) => {
                window.localStorage.removeItem('CREDENTIALS_FLUSH')
                sessionStorage.clear();
                window.location.replace("/")
            });
        }
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
                    <br/>
                    <div className="container">
                    <div className="card">
                        <div className="flex-md-column-reverse">
                        <div className="card-header w-150">
                            <h2 className="text-left m-auto text-white bg-info card card-body">My Account</h2>
                        </div>
                            <div className="flex-md-column-reverse text-right text-justify">
                                <button className="btn btn-success"><Link to="/ResetPassword"><h6 className="text-white">Reset Password</h6></Link></button><button className="btn btn-primary" onClick={this.onDeleteClick.bind(this,this.state.user_1.id)}><h6 className="text-white">Delete Account</h6></button>
                            </div>
                            <br/>
                            <img src={acc} height="195" width="250" alt=""/>
                                    <div className="card-body">
                                        <h6 className="card-title">Name:{this.state.user_1.name}</h6>
                                                <h6 className="card-text text-truncate">
                                                    Email:{this.state.user_1.email}
                                                </h6>
                                        <button className="btn btn-info"><Link to="/EditProfile"><h6 className="text-white">Edit Profile</h6></Link></button>
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