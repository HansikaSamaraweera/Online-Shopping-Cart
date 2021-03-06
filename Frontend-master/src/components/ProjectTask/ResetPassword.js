import React, { Component } from "react";
import axios from "axios";
import {GET_USER} from "../../actions/types";
import {Link} from "react-router-dom";



class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
            passwordcurrent:"",
            password:"",
            cpassword:"",
            user123:[],
            newuser:[],

        };
        this.OnChange=this.OnChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


    }
    componentDidMount() {
        axios.get(`/api/Users/name/${sessionStorage.getItem("sessionName")}`)
            .then(responce =>{
                this.setState({user123 : responce.data});
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    OnChange(e){
        this.setState({[e.target.name]:e.target.value})

    }

    onSubmit(e){
        e.preventDefault();
        this.currentpassword=this.state.passwordcurrent;
        this.password=this.state.password;
        this.cpassword=this.state.cpassword;
        console.log(this.currentpassword+this.password+this.cpassword);

        this.checkpw=this.state.user123.password;
        this.id=this.state.user123.id;
        this.name=this.state.user123.name;
        this.post=this.state.user123.post;
        this.email=this.state.user123.email;

        //console.log(this.checkpw);
       if(this.checkpw!==this.currentpassword){
            alert("please enter correct current password");
        }else if(this.cpassword!==this.password){
           alert("Password Mismatching");
       }else{

           const requestOptions = {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                   id:this.id ,
                   name:this.name,
                   post:this.post,
                   email: this.email,
                   password:this.password

               })
           };
           fetch('/api/Users/update', requestOptions)
               .then(response => response.json())
               .then(data => this.setState({ newuser: data.id }));

           if(this.state.newuser!==null){
               this.setState({newuser:null})
               window.alert("Password Reset Successfully ...!!");
               window.location.replace("/MyAccount");
           }

       }
    }



    render() {
        return(
            <div className="">
                <br/>
        <div className="col-md-6 m-auto alert-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br/>
                        <Link to="/MyAccount">
                            <i className="fas fa-angle-double-left"> Back </i>
                        </Link>
                        <label className="btn-block m-2 h4">Reset Password</label>
                        <br/>
                        <form onSubmit={this.onSubmit}>
                            {/*current password*/}
                            <div className="form-group alert-link">
                                <input type="password"
                                       name="passwordcurrent"
                                       placeholder="Current Password"
                                       onChange={this.OnChange}
                                       required

                                />

                            </div>
                            {/*password*/}
                            <div className="form-group alert-link">
                                <input type="password"
                                       id="pswrd"
                                       name="password"
                                       value={this.state.password["password"]}
                                       placeholder="Password"
                                       onChange={this.OnChange}
                                       required
                                />

                            </div>
                            {/*confirm password*/}
                            <div className="form-group alert-link">
                                <input type="password"
                                       id="cpswrd"
                                       name="cpassword"
                                       value={this.state.cpassword["cpassword"]}
                                       placeholder="Confirm Password"
                                       onChange={this.OnChange}
                                       required
                                />

                            </div>
                            <br/>
                            <input type="submit" value="Reset Password" className="btn btn-outline-info btn-block col-md-5 m-auto"/>
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


