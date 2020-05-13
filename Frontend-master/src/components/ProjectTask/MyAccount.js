import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        axios.get('/Users/'+this.props.match.params.id)
            .then(res => {
                this.setState({ user: res.data });
                console.log(this.state.user);
            });
    }

    delete(id){
        console.log(id);
        axios.delete('/api/Users/all'+id)
            .then((result) => {
                this.props.history.push("/")
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
                    <button className="btn btn-danger text-right" onClick={this.onClickMethod}>Log Out</button>
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
                                                    Email:{this.props.user.email}
                                                </p>
                                        <button onClick={this.delete.bind(this, this.state.user.id)}className="btn btn-primary">Delete Account</button>
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