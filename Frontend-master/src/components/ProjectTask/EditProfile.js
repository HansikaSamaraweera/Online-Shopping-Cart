import React, { Component } from "react";
import {updateCustomer} from "../../actions/projectTaskActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class EditProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const editUser = {
            name: this.state.name,
            email: this.state.email
        };
        // console.log(editUser);
        this.props.updateCustomer(editUser, this.props.history);
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
                               value={this.state.name}
                               placeholder="User Name"
                               onChange={this.onChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className="form-control"
                               name="email"
                               placeholder="Email"
                               value={this.state.email}
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
updateCustomer.propTypes = {
    updateCustomer: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateCustomer }
)(EditProfile);