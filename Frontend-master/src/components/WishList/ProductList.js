import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import {addToWishList} from "../../actions/actions";


class ProductList extends Component
{
    addToWishList = (product) => {
        this.props.addToWishList(product);
    }

    render() {
        return (
            <div className="container">
                <h2>Product List</h2>
                <br/>
                <div className="row">

                    {
                        this.props.products.map(product => <Product product={product} addToWishList={this.addToWishList} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /> )
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        wishList: state.wishList.wishList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToWishList: (product) => {
            dispatch(addToWishList(product));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)