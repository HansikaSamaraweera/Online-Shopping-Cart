import React, { Component } from "react";
import {updateCustomer} from "../../actions/projectTaskActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from "axios";
import acc from "../images/acc.png";


class EditProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            user_ed:[],
            errors: {}
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('/api/Users/name/'+sessionStorage.getItem("sessionName"))
            .then(responce =>{
                this.setState({
                    id:responce.data.id,
                    name:responce.data.name,
                    post:responce.data.post,
                    email:responce.data.email,
                    password:responce.data.password,
                });
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const editUser = {
            id:this.state.id,
            name: this.state.name,
            post:this.state.post,
            email: this.state.email,
            password:this.state.password
        };
        // console.log(editUser);
        this.props.updateCustomer(editUser, this.props.history);
        window.alert("Profile Update Successfully...!!");
    }
    render() {
        return(
            <div>
                <br/>
            <div className="col-md-6 m-auto alert-info">
                <div className="container">
                <div className="m-6">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <img src={acc} height="190" width="240" alt=""/>
                <h3> Edit Profile </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control alert-link"
                               name="name"
                               value={this.state.name}
                               placeholder="User Name"
                               onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control alert-link"
                               name="email"
                               placeholder="Email"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
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