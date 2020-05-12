import React,{Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {addProduct} from "../../actions/projectTaskActions"
import classnames from "classnames";

 class CreateProduct extends Component{

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_price: '',
            product_category: '',
            errors: ''

        }

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
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

        const newProductTask = {
            name: this.state.product_name,
            category: this.state.product_category,
            price: this.state.product_price,

        };
        console.log(newProductTask);
        this.props.addProduct(newProductTask, this.props.history);

        /*this.setState({
            product_name: '',
            product_price: '',
            product_category: ''
        })*/
    }

    render() {
        return(

            <div style={{marginTop: 20}}>
                <h3>Add a New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Name:</label>
                        <input type="text" className="form-control"
                               name="name"
                               value={this.state.product_name}
                               onChange={this.onChangeProductName}/>

                    </div>
                    <div className="form-group">
                        <label> Price:</label>
                        <input type="text" className="form-control"
                               value={this.state.product_price}
                               onChange={this.onChangeProductPrice}/>
                    </div>
                    <div className="form-group">
                        <label> Category:</label>
                        <input type="text" className="form-control"
                               value={this.state.product_category}
                               onChange={this.onChangeProductCategory}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" Add Product" className="btn btn-primary"/>

                    </div>

                </form>
            </div>
        );
    }
}

CreateProduct.propTypes = {
     addProduct: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps,{addProduct}) (CreateProduct);
