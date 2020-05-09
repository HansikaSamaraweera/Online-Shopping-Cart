import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewUser} from "../../actions/projectTaskActions";
import classnames from "classnames";
import Loader from 'react-loader-spinner';
import "../../admin.css";


class AddUserTask extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            post:"",
            email:"",
            password:"",
            cpassword:"",
            errors:[],
            loader:"notloading"

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

       /*setTimeout(()=>{
            props.history.push('/Admin')
        },2000)*/
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
            cpassword:this.state.cpassword,
        }
        if(newProjectTask.password===newProjectTask.cpassword) {

            this.setState({loader:"loading"});
            this.props.addProjectTask(newProjectTask, this.props.history);

        }else{
            document.getElementById("pswrd").value='';
           document.getElementById("cpswrd").value='';
        }
    }



    render() {
        const{errors}=this.state;
        const {loader}=this.state;
        console.log(loader);
        return (
            <div className="col-md-7 m-auto alert-danger">
                <div className="container" id="addUserTask">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <br/>
                            <Link to="/Admin" className="btn btn-outline-danger m-3">
                                <i className="fas fa-angle-double-left"> Back to Main </i>
                            </Link>
                            <br/>
                            <h6 className="display-5 text-center">Add New User</h6>
                            <form onSubmit={this.onSubmit}>
                                {/*Name*/}
                                <div className="form-group text-center ">
                                    <input type="text"
                                           className={classnames("form-control alert-link",{"is-invalid":errors.error})}
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
                                           className={classnames("form-control alert-link",{"is-invalid":errors.email})}
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
                                            value={this.state.post}
                                            onChange={this.onChange}
                                            required
                                    >
                                        <option value="">Select Position</option>
                                        <option value="STORE_MANAGER">STORE MANAGER</option>
                                        <option value="ADMIN">ADMIN</option>
                                    </select>

                                </div>
                                {/*password*/}
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control alert-link",{"is-invalid":errors.password})}
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
                                           className={classnames("form-control alert-link",{"is-invalid":errors.cpassword})}
                                           name="cpassword"
                                           value={this.state.cpassword}
                                           placeholder="Confirm Password"
                                           onChange={this.onChange}
                                           required
                                    />

                                </div>

                                <input type="submit" className="btn btn-outline-info btn-block mt-4"/>
                                {console.log(loader)}
                                {

                                    loader==="loading" ?
                                        <div><Loader type="ThreeDots" color="#1bad15" height="100" width="100" />
                                            <p> This may take few seconds..........</p> </div>
                                        :null
                                }
                                <br/>
                            </form>
                            <p><br/><br/><br/></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AddUserTask.prototypes={
    addProjectTask: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
})

export default connect(mapStateToProps,{addProjectTask: addNewUser}) (AddUserTask);