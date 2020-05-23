import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from 'axios';
import {Link} from "react-router-dom";



class CommentList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                product:[],
                name:""
            };

        }




    render() {

        const {id} = this.props;
            axios.get("/reviews/pid/" + id)
                .then(responce => {
                    this.setState({product: responce.data});
                })
                .catch(function (error) {
                    console.log(error)
                })

    let message =this.state.product.map((current) => {
        return (
            <tr>
                <td>{current.p}</td>
                <td>{current.user}</td>
                <td>{current.message}</td>
            </tr>
        )
        }
    );

        return (

            <div>

                <table className={"table table-striped"} style={{marginTop:20}}>
                    <thead>
                    <tr>

                        <th>Product</th>
                        <th>Name</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {message}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default (CommentList);
