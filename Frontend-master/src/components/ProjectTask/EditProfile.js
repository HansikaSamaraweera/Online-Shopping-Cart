import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    getUser,
    addNewUserCus,
} from "../../actions/projectTaskActions";
import axios from "axios";

class EditProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user_prof: {}
        };
    }

    componentDidMount() {
        axios.get('/api/Users/name/${sessionStorage.getItem("sessionName")')
            .then(res => {
                this.setState({ user_prof: res.data });
                console.log(this.state.user_prof);
            });
    }

    onChange = (e) => {
        this.setState({
            name: e.target.value,
            email: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, email } = this.state.user_prof;

        axios.put('/api/Users/'+this.props.match.params.id, { name, email })
            .then((result) => {
                this.props.history.push("/"+this.props.match.params.id)
            });
    }



    render() {
        return(
            <div className="col-md-6 m-auto alert-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                <h3> Edit Profile </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               value={this.state.user_prof.name}
                               placeholder="User Name"
                               onChange={this.onChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Email"
                               value={this.state.user_prof.email}
                               onChange={this.onChange}
                                 />
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" Update Profile" className="btn btn-primary"/>

                    </div>
                </form>
            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProfile;