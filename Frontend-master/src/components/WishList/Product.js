import React, { Component } from 'react';

class Product extends Component
{
    state = {
        inWish: this.props.inWish
    };

    addToWishList = (e) => {

        e.preventDefault();

        this.props.addToWishList(this.props.product)

        this.setState({
            inWish: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <figcaption className="info-wrap">
                        <p className="desc">{product.name}</p>
                    </figcaption>
                    <div className="bottom-wrap">

                        {
                            this.state.inWish?(
                                <span className="btn btn-success">Added to WishList</span>
                            ) : (
                                <a href="#" onClick={this.addToWishList} className="btn btn-sm btn-primary float-right">Add to Wish List</a>
                            )
                        }
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product;