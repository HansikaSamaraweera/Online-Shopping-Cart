import React,{Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getProduct1, addProduct} from "../../actions/projectTaskActions";

class DiscountProduct extends Component{

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            product_name: '',
            product_price: '',
            product_category: '',
            category:[],
            prodduct_photo:'',
            select:'',


        };
        console.log(props.id);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onChangeProductPhoto = this.onChangeProductPhoto.bind(this);

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }


    componentDidMount() {

        axios.get('http://localhost:8080/api/Products/'+this.props.match.params.id)
            .then(response => {

                this.setState({
                    id:response.data.id,
                    product_name: response.data.name,
                    product_price : response.data.price,
                    product_category : response.data.category,
                    product_photo: response.data.photo

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
            product_price: e.target.value
        });
    }
    onChangeValue(e){
        this.setState({
            select: e.target.value
        });
    }

    onChangeProductCategory(e){
        this.setState({
            product_category: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();

        if(this.state.select == 1) {
            const obj = {
                id: this.state.id,
                name: this.state.product_name+"( 5% Discounted )",
                price: (parseInt(this.state.product_price)*95)/100,
                category: this.state.product_category,
                photo: this.state.product_photo
            };

            console.log(obj);
            this.props.addProduct(obj, this.props.history);
        }
        else if(this.state.select == 2) {
            const obj = {
                id: this.state.id,
                name: this.state.product_name+"( 10% Discounted )",
                price: (parseInt(this.state.product_price)*90)/100,
                category: this.state.product_category,
                photo: this.state.product_photo
            };

            console.log(obj);
            this.props.addProduct(obj, this.props.history);
        }

        else if(this.state.select == 3) {
            const obj = {
                id: this.state.id,
                name: this.state.product_name+"( 15% Discounted )",
                price: (parseInt(this.state.product_price)*85)/100,
                category: this.state.product_category,
                photo: this.state.product_photo
            };

            console.log(obj);
            this.props.addProduct(obj, this.props.history);
        }

        else if(this.state.select == 4) {
            const obj = {
                id: this.state.id,
                name: this.state.product_name+"( 50% Discounted )",
                price: (parseInt(this.state.product_price)*50)/100,
                category: this.state.product_category,
                photo: this.state.product_photo
            };

            console.log(obj);
            this.props.addProduct(obj, this.props.history);
        }



    }

    render() {
        console.log(this.props);
        return(

            <div>

                <h3> Add Discount </h3>
                <form onSubmit={this.onSubmit} style={{marginTop: 20}}>
                    <div className="form-group" style={{marginRight: 600, marginLeft: 600}}>
                        <label>Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_name}
                        />
                    </div>
                    <div className="form-group" style={{marginRight: 600, marginLeft: 600}}>
                        <label>Price: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.product_price}/>
                    </div>
                    <div className="form-group">
                        <div className="dropdown">

                            <select id = "dropdown" value={this.state.select}
                                    onChange={this.onChangeValue}>
                                <option value="0">Select Discount</option>
                                <option value="1">5% Discount</option>
                                <option value="2">10% Discount</option>
                                <option value="3">15% Discount</option>
                                <option value="4">50% Discount</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value=" Add Discount" className="btn btn-primary"/>
                        <Link to={"/ProductList"} style={{marginLeft: 6}}> Cancel </Link>

                    </div>
                </form>
            </div>
        );
    }
}
DiscountProduct.propTypes = {
    product_task1: PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired,
    getProduct1: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired
};
const  mapStateToProps = state =>({
    product_task1: state.product_task.product_task1,
    errors: state.errors
});
export default connect(mapStateToProps ,{getProduct1,addProduct}) (DiscountProduct);
