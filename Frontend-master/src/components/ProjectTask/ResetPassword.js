import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    getUser,
    addNewUserCus,
} from "../../actions/projectTaskActions";

class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            cpassword:"",
            errors:[]
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const { id, password,cpassword } =nextProps.user_task;

        this.setState({
            id,
            password,
            cpassword
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUser(id);
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedTask = {
            id: this.state.id,
            password: this.state.password,
            cpassword: this.state.cpassword
        };

        this.props.addNewUserCus(updatedTask, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
            <div className="">
                <br/>
        <div className="col-md-6 m-auto alert-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h6 className="display-5 text-center">Reset Password</h6><br/>
                        <form onSubmit={this.onSubmit}>
                            {/*current password*/}
                            <div className="form-group">
                                <input type="password"
                                       placeholder="Current Password"
                                       onChange={this.onChange}
                                       required
                                />

                            </div>
                            {/*password*/}
                            <div className="form-group">
                                <input type="password"
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
                                       name="cpassword"
                                       value={this.state.cpassword}
                                       placeholder="Confirm Password"
                                       onChange={this.onChange}
                                       required
                                />

                            </div>

                            <input type="submit" className="btn btn-outline-info btn-block col-md-6 m-auto"/>
                        </form>
                        <p><br/><br/><br/></p>
                    </div>
                </div>
            </div>
        </div>
            </div>
    );
    }
}
ResetPassword.propTypes = {
    user_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    addNewUserCus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user_task: state.user_task.user_task,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getUser, addNewUserCus}
)(ResetPassword);