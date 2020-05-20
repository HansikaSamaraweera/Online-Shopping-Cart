import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {addProduct} from "../../actions/projectTaskActions"
import axios from "axios";
import {Button} from "reactstrap";
import category from "../../reducers/category";

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
            errors: '',
            category:[]

        }
        console.log(category)

    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/categories/all")
            .then(response => {
                this.setState({category: response.data});
            } )
            .catch(function (error) {
                console.log(error);

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

        const newProductTask = {
            name: this.state.product_name,
            category: this.state.product_category,
            price: this.state.product_price,

        };
        console.log(newProductTask);
        this.props.addProduct(newProductTask, this.props.history);
    }

    render() {

        return(

            <div style={{marginTop: 20}}>
                <div style={{marginRight: 2000,marginTop: 20}}>
                    <Link to={"/ProductList"}>List</Link>
                </div>
                <h3>Add a New Product</h3>
                <form onSubmit={this.onSubmit} style={{marginTop: 20}}>
                    <div className="form-group " style={{marginRight: 600, marginLeft: 600}}>
                        <label> Name:</label>
                        <input type="text" className="form-control"
                               name="name" required
                               value={this.state.product_name}
                               onChange={this.onChangeProductName}/>

                    </div>
                    <div className="form-group" style={{marginRight: 600, marginLeft: 600}}>
                        <label> Price:</label>
                        <input type="text" className="form-control" required
                               value={this.state.product_price}
                               onChange={this.onChangeProductPrice}/>
                    </div>
                    <div className="form-group">
                        <div className="dropdown">
                            <p> Select Category</p>

                            <select onChange={this.onChangeProductCategory}>{
                                this.state.category.map(category => <option value={category.cName}
                                                                            onChange={this.onChangeProductCategory}>
                                    {category.cName}
                                </option> )
                            }
                            </select>
                        </div>
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
