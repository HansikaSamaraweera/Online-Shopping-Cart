import React, {Component} from 'react';
import CartList from "./CartList";
import CommentList from "./CommentList";

class Comment extends Component {
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
                            <form>
                                <div className={"input-group"}>
                                    <div className={"input-group-prepend"}>
                                        <div className={"input-group-text bg-primary text-white"}>
                                            <i className={"fas fa-book"}></i>
                                        </div>
                                    </div>

                                    <input type={"text"} className={"form-control"} placeholder={"Add Your Comment"} />
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

export default Comment;