import React,{Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getProduct1, addProduct} from "../../actions/projectTaskActions";

class EditProduct extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            product_name: '',
            product_price: '',
            product_category: '',
            product_photo: '',
            category:[]

        };
        console.log(props.id);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onChangeProductPhoto = this.onChangeProductPhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }


    componentDidMount() {

        axios.get('http://localhost:8080/api/Products/'+this.props.match.params.id)
            .then(response => {

                this.setState({
                    id:response.data.id,
                    product_name: response.data.name,
                    product_price : response.data.price,
                    product_photo : response.data.photo,
                    product_category : response.data.category

                })


            })
            .catch(function (error) {
                console.log(error)

            })

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

    onChangeProductPhoto(e){
        this.setState({
            product_photo: e.target.value
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
            id: this.state.id,
            name: this.state.product_name,
            price: this.state.product_price,
            photo: this.state.product_photo,
            category: this.state.product_category
        };
        console.log(obj);
        this.props.addProduct(obj, this.props.history);



    }

    render() {
        console.log(this.props);
        return(

            <div>

                <h3> Update Product </h3>
                <form onSubmit={this.onSubmit} style={{marginTop: 20}}>
                    <div className="form-group" style={{marginRight: 600, marginLeft: 600}}>
                        <label>Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_name}
                               onChange={this.onChangeProductName} />
                    </div>
                    <div className="form-group" style={{marginRight: 600, marginLeft: 600}}>
                        <label>Price: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_price}
                               onChange={this.onChangeProductPrice} />
                    </div>

                    <div className="form-group" style={{marginRight: 600, marginLeft: 600}}>
                        <label>Url: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_photo}
                               onChange={this.onChangeProductPhoto} />
                    </div>
                    <div className="form-group">
                        <div className="dropdown">

                            <select onChange={this.onChangeProductCategory} value={this.state.product_category}>

                                {
                                    this.state.category.map(category =>

                                        <option value={category.cName}>
                                            {category.cName}
                                        </option> )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" Update Product" className="btn btn-primary"/>
                        <Link to={"/ProductList"} style={{marginLeft: 6}}> Cancel </Link>

                    </div>
                </form>
            </div>
        );
    }
}
EditProduct.propTypes = {
    product_task1: PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired,
    getProduct1: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired
};
const  mapStateToProps = state =>({
    product_task1: state.product_task.product_task1,
    errors: state.errors
});
export default connect(mapStateToProps ,{getProduct1,addProduct}) (EditProduct);
