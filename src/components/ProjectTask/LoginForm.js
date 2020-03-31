import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../actions/projectTaskActions";


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
            return( <div>loggged in</div>);
        }else {
            return (
                <div className="col-md-4 m-auto">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group text-center">
                            <label className="display-3">Sign In</label>
                            <input type="text" className="form-control form-control-lg"
                                   placeholder="User name"
                                   required
                                   name="name"
                                   value={this.state.name}
                                   error={this.state.errors.name}
                                   onChange={this.OnChange}/>
                            <br/>
                            <input type="password" className="form-control form-control-lg"
                                   placeholder="password"
                                   required
                                   name="password"
                                   value={this.state.password}
                                   error={this.state.errors.password}
                                   onChange={this.OnChange}/>
                            <input type="submit" className="btn btn-primary btn-block mt-4"/>
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