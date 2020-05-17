import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from 'axios';
import {Link} from "react-router-dom";

const Message = props => (
    <tr>
        <td>{props.todo.user}</td>
        <td>{props.todo.p}</td>
        <td>{props.todo.message}</td>
    </tr>
);


class CommentList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                product:[],
                name:""
            };

        }
        // componentDidMount() {
        //
        // axios.get("http://localhost:8080/reviews/get"  )
        //     .then(responce=>{
        //         this.setState({product: responce.data});
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        // }
mgList(){
            return this.state.product.map(function (current,i) {
                return <Message todo={current} key={i}/>;
            });
}


    render() {
        const {id} = this.props;

        axios.get("/reviews/name/"+id  )
            .then(responce=>{
                this.setState({product: responce.data});
            })
            .catch(function (error) {
                console.log(error)
            })

    let message =this.state.product.map((current) => {
        return (
            <tr>
                <td>{current.user}</td>
                <td>{current.p}</td>
                <td>{current.message}</td>
            </tr>
        )
        }
    );

        return (

            <div>
                {/*<ul className="list-group  ">*/}
                {/*    <li className="list-group-item">First item</li>*/}
                {/*    <li className="list-group-item">Second item</li>*/}
                {/*    <li className="list-group-item">Third item</li>*/}
                {/*</ul>*/}
                <h3>List</h3>
                <table className={"table table-striped"} style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product</th>
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
