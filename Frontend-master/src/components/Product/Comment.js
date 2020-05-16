import React, {Component} from 'react';
import CartList from "./CartList";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewUser} from "../../actions/projectTaskActions";
import classnames from "classnames";
import {addComment} from "../../actions/ProductAction";
import ItemHome from "./ItemHome";
import axios from "axios";
import qs from 'query-string';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "",
            p:"",
            user:"",
            name:"",

        };
        console.log(this.props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //alert(qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k);

    }

componentDidMount() {

    axios.get('http://localhost:8080/api/Products/'+qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k)
        .then(responce =>{
            this.setState({
                name : responce.data.name

            });
            console.log(this.state.name);
        })
        .catch(function (error) {
            console.log(error)
        })
}


    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();

        if(sessionStorage.getItem("sessionName")!=null) {
            const newMessage = {
                message: this.state.message,
                p:this.state.name,
                user: sessionStorage.getItem("sessionName")
            };
            console.log(newMessage);
            this.props.addComment(newMessage, this.props.history);
        }else{
            alert("Please Login or Register to add Comment!!!");
        }
    }

    render() {
        return (
            <div className={"container"}>
                <h2 className={"text-capitalize card card-body my-3 bg-info text-white"}>
                    <h6>{this.state.name} </h6>
                    Comments & Reviews </h2>
                <div className={"row"}>
                    <div className={" col-10 mx-auto col-md-12 mt-4 jumbotron"}>
                        {/*/////////////////////////////////////*/}
                        <div className={"card card-body my-3"}>
                            <form onSubmit={this.onSubmit}>
                                <div className={"input-group"}>
                                    <div className={"input-group-prepend"}>
                                        <div className={"input-group-text bg-primary text-white"}>
                                            <i className={"fas fa-book"}></i>
                                        </div>
                                    </div>

                                    <input type={"text"} className={"form-control"} placeholder={"Add Your Comment"} name={"message"} value={this.state.message} onChange={this.onChange}/>
                                </div>

                                <button type={"submit"}
                                        className={"btn btn-block btn-primary mt-3" }>
                                    Post Comment
                                </button>
                            </form>
                        </div>

                        {/*////////////////////////////////////////////*/}

                        {/*Load Comment & Revie List*/}
                        <ul className={"list-group my-5 "}>
                            <CommentList/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
addComment.propTypes ={
    addComment:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
});

export default connect(mapStateToProps,{addComment}) (Comment);
