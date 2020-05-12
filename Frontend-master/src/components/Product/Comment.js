import React, {Component} from 'react';
import CartList from "./CartList";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewUser} from "../../actions/projectTaskActions";
import classnames from "classnames";
import {addComment} from "../../actions/ProductAction";

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            message : "",
            p:"",
            user:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const newMessage ={
            message : this.state.message,
            p:"Frock",
            user:"ccc"
        };
        // console.log(newMessage);
        this.props.addComment(newMessage,this.props.history);
    }

    render() {
        return (
            <div className={"container"}>
                <h2 className={"text-capitalize card card-body my-3 bg-info text-white"}>
                    <h6>Product Name</h6>
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
