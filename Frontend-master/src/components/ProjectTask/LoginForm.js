import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../actions/projectTaskActions";
import logo from '../images/pic1.gif';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            name:"",
            password:"",
            errors:{},
            isLoading:false
        }

        this.OnChange=this.OnChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.name=this.state.name;
        this.password=this.state.password;
        this.props.checklogin(this.name);

        //console.log(this.props.login_user.user_det.name)
    }
    OnChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    render() {
        const{errors,name,password,isLoading}=this.state;
        let user;
        const nameDet= this.props.login_user.user_det.name;
        const passwordDet=this.props.login_user.user_det.password;
        const postDet=this.props.login_user.user_det.post;

        if(passwordDet===password){
        sessionStorage.setItem("sessionName",nameDet);
        sessionStorage.setItem("sessionPost",postDet);
        }

        if(sessionStorage.getItem("sessionName")!==null){
            return(
                <div> Successfully Logged In {window.location.replace("/")} </div>);
        }else {
            return (

                <div className="col-md-3 m-auto alert-danger" >
                    <div className="m-3">
                        <br/>
                    </div>
                    <img src={logo} height="200" width="250"/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group text-center">
                            <label className="btn-block m-2 h4">Login</label>
                            <input type="text" className="form-control alert-link"
                                   placeholder="User Name"
                                   required
                                   name="name"
                                   value={this.state.name}
                                   error={this.state.errors.name}
                                   onChange={this.OnChange}/>
                            <br/>
                            <input type="password" className="form-control alert-link"
                                   placeholder="Password"
                                   required
                                   name="password"
                                   value={this.state.password}
                                   error={this.state.errors.password}
                                   onChange={this.OnChange}/>
                            <input type="submit" className="btn btn-outline-info btn-block mt-4"/>
                            <br/>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
LoginForm.prototypes={
    checklogin:PropTypes.func.isRequired,
    login_user: PropTypes.object.isRequired
}
const mapStatetoProps=state=>({
    login_user: state.user_details
});

export default connect(mapStatetoProps,{checklogin:login}) (LoginForm);