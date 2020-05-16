import React,{Component} from 'react';
import axios from 'axios';
import {connect} from "classnames";
import classnames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getProduct} from "../../actions/projectTaskActions";

class EditProduct extends Component{

    constructor(props) {
        super(props);

        this.state = {
            product_name: '',
            product_price: '',
            product_category: ''

        };

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }

    componentDidMount() {

        axios.get('http://localhost:8080/api/Products/EditProduct'+this.props.match.params.id)
            .then(response => {

                this.setState({
                    product_name: response.data.name,
                    product_price : response.data.price,
                    product_category : response.data.category
                })
    

            })
            .catch(function (error) {
                console.log(error)

            })
    }

    onChangeProductName(e){
        this.setState({
            product_name: e.target.value
        });
    }

    onChangeProductPrice(e){
        this.setState({
            product_price: e.target.value
        });
    }

    onChangeProductCategory(e){
        this.setState({
            product_category: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            name: this.state.product_name,
            price: this.state.product_price,
            category: this.state.product_category
        };
        axios.post("http://localhost:8080/api/Products/"+this.props.match.params.id,obj)
            .then(res => console.log(res.data));

        this.props.history.push('/ProductList')

    }

    render() {
        return(

            <div>
                <h3> Update Product </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_name}
                               onChange={this.onChangeProductName} />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_price}
                               onChange={this.onChangeProductPrice} />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_category}
                               onChange={this.onChangeProductCategory} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" Update Product" className="btn btn-primary"/>

                    </div>
                </form>
            </div>
        );
    }
}
export default EditProduct;
