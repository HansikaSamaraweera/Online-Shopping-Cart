import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewUserCus} from "../../actions/projectTaskActions";
import classnames from "classnames";
import "../../admin.css";

class Register extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            post:"",
            email:"",
            password:"",
            cpassword:"",
            errors:[],

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
        this.state.load=false;
        if(newProjectTask.password===newProjectTask.cpassword) {
            this.props.addProjectTask(newProjectTask, this.props.history);

            /*sessionStorage.setItem("sessionName",newProjectTask.name);
            sessionStorage.setItem("sessionPost",newProjectTask.post);
            window.location.replace("/")*/

        }else{
            document.getElementById("pswrd").value='';
           document.getElementById("cpswrd").value='';
        }
    }

    render() {
        const{errors}=this.state;
        if(sessionStorage.getItem("sessionName")===null) {
            return (
                <div className="container">
                    <br/>
                    <div className="col-md-7 m-auto alert-dark">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <br/>
                                <Link to="/" className="btn mb-0 btn-outline-info">
                                    <i className="fas fa-angle-double-left"> Back to Main </i>
                                </Link>
                                <br/>
                                <br/>
                                <h4 className="display-4 text-center" id="register">Register</h4>
                                <form onSubmit={this.onSubmit}>
                                    {/*Name*/}
                                    <div className="form-group">
                                        <input type="text"
                                               className={classnames("form-control alert-link", {"is-invalid": errors.error})}
                                               name="name"
                                               value={this.state.name}
                                               placeholder="User Name"
                                               onChange={this.onChange}
                                               required
                                        />
                                        {
                                            errors.error && (
                                                <div className="invalid-feedback">{errors.error}</div>
                                            )
                                        }

                                    </div>
                                    {/*email*/}
                                    <div className="form-group">
                                        <input type="email"
                                               className={classnames("form-control alert-link", {"is-invalid": errors.email})}
                                               name="email"
                                               value={this.state.email}
                                               placeholder="Email"
                                               onChange={this.onChange}
                                               required
                                        />

                                    </div>
                                    {/*Post*/}
                                    <div className="form-group">
                                        <select className="form-control alert-link"
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
                                               className={classnames("form-control alert-link", {"is-invalid": errors.password})}
                                               id="pswrd"
                                               name="password"
                                               value={this.state.password}
                                               placeholder="Password"
                                               onChange={this.onChange}
                                               required
                                        />

                                    </div>
                                    {/*confirm password*/}
                                    <div className="form-group">
                                        <input type="password"
                                               id="cpswrd"
                                               className={classnames("form-control alert-link", {"is-invalid": errors.cpassword})}
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
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            );}
            else{
                return (<div> {window.location.replace("/login")} </div>);
            }

    }
}
Register.prototypes={
    addProjectTask: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
})

export default connect(mapStateToProps,{addProjectTask: addNewUserCus}) (Register);