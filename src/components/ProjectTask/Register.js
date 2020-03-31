import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewUser} from "../../actions/projectTaskActions";
import classnames from "classnames";

class Register extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            post:"",
            email:"",
            password:"",
            cpassword:"",
            errors:[]
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        console.log("message");
        console.log(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newProjectTask={
            name:this.state.name,
            post:this.state.post,
            email:this.state.email,
            password:this.state.password,
            cpassword:this.state.cpassword

        }
        if(newProjectTask.password===newProjectTask.cpassword) {
            this.props.addProjectTask(newProjectTask, this.props.history);
        }else{
            document.getElementById("pswrd").value='';
           document.getElementById("cpswrd").value='';
        }
    }

    render() {
        const{errors}=this.state;
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Back to Main
                            </Link>
                            <h4 className="display-4 text-center">Register</h4>
                            <form onSubmit={this.onSubmit}>
                                {/*Name*/}
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg",{"is-invalid":errors.name})}
                                           name="name"
                                           value={this.state.name}
                                           placeholder="User Name"
                                           onChange={this.onChange}
                                           required
                                    />
                                    {
                                        errors.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )
                                    }
                                </div>
                                {/*email*/}
                                <div className="form-group">
                                    <input type="email"
                                           className={classnames("form-control form-control-lg",{"is-invalid":errors.email})}
                                           name="email"
                                           value={this.state.email}
                                           placeholder="Email"
                                           onChange={this.onChange}
                                           required
                                    />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>
                                {/*Post*/}
                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                            name="post"
                                            required
                                            value={this.state.post}
                                            onChange={this.onChange}
                                    >
                                        <option value="">Select Position</option>
                                        <option value="CUSTOMER">CUSTOMER</option>
                                    </select>

                                </div>
                                {/*password*/}
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg",{"is-invalid":errors.password})}
                                           id="pswrd"
                                           name="password"
                                           value={this.state.password}
                                           placeholder="Password"
                                           onChange={this.onChange}
                                           required
                                    />
                                    {
                                        errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )
                                    }
                                </div>
                                {/*confirm password*/}
                                <div className="form-group">
                                    <input type="password"
                                           id="cpswrd"
                                           className={classnames("form-control form-control-lg",{"is-invalid":errors.cpassword})}
                                           name="cpassword"
                                           value={this.state.cpassword}
                                           placeholder="Confirm Password"
                                           onChange={this.onChange}
                                           required
                                    />
                                    {
                                        errors.cpassword && (
                                            <div className="invalid-feedback">{errors.cpassword}</div>
                                        )
                                    }
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Register.prototypes={
    addProjectTaskTask: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
})

export default connect(null,{addProjectTask: addNewUser}) (Register);