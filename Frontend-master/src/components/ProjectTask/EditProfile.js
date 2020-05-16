import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    getUser,
    addNewUserCus,
} from "../../actions/projectTaskActions";

class EditProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            errors:[]
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        /*const { id, name,email } =nextProps.user;

        this.setState({
            id,
            name,
            email
        });*/
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUser(id);
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedTask2 = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email
        };

        this.props.addNewUserCus(updatedTask2, this.props.history);
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
                                <h6 className="display-5 text-center">Edit Profile</h6><br/>
                                <form onSubmit={this.onSubmit}>
                                    {/*name*/}
                                    <div className="form-group">
                                        <input type="text"
                                               placeholder="User Name"
                                               value={sessionStorage.getItem("sessionName")}
                                               onChange={this.onChange}
                                               required
                                        />

                                    </div>

                                    {/*email*/}
                                    {/*<div className="form-group">
                                        <input type="text"
                                               id="mail"
                                               name="email"
                                               value={this.state.email}
                                               placeholder="Email"
                                               onChange={this.onChange}
                                               required
                                        />
                                    </div>*/}
                                    <input type="submit" className="btn btn-outline-success btn-block col-md-6 m-auto" value="Save"/>
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
EditProfile.propTypes = {
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
)(EditProfile);