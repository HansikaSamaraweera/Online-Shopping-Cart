import React, { Component } from "react";
import axios from "axios";

class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        axios.get('/api/Users/'+this.props.match.params.id)
            .then(res => {
                this.setState({ user: res.data });
                console.log(this.state.user);
            });
    }

/*onChange = (e) => {
        const state = this.state.user
        state[e.target.password] = e.target.value;
        this.setState({user:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { password,cpassword } = this.state.user;

        axios.put('/api/Users/'+this.props.match.params.id, { password,cpassword })
            .then((result) => {
                this.props.history.push("/"+this.props.match.params.id)
            });
    }*/

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
                                       value={this.state.user.password}
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
                                       value={this.state.user.cpassword}
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
export default ResetPassword;


