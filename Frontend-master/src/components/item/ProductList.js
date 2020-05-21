import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {DeleteProduct} from "../../actions/projectTaskActions";
import {Modal,ModalFooter,ModalBody,ModalHeader,FormGroup,Label,Input,Table,Button} from 'reactstrap';



class ProductList extends Component{
    state = {

        editProductData: {
            id: '',
            name: '',
            price: '',
            category: ''
        },

        editProductModal: false
    }

    constructor(props) {
        super(props);
        this.state = {product:[]};

    }

    onDeleteClick(p_id){
        if(window.confirm('You are deleting a Product, this action cannot be undone')) {
            axios.delete("http://localhost:8080/api/Products/" + p_id).then((response) => {
                this._refreshProducts();
            });
        }

    }

    _refreshProducts() {
        axios.get("http://localhost:8080/api/Products/all")
            .then(response => {
                this.setState({product: response.data});
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/Products/all")
            .then(response => {
                this.setState({product: response.data});
            } )
            .catch(function (error) {
                console.log(error);

            })
    }

    render() {
        let product = this.state.product.map((product1) => {
                return(
                    <tr key={ product1.id}>
                        <td >{product1.name}</td>
                        <td>{product1.price}</td>
                        <td>{product1.category}</td>
                        <td>
                            <Link to={"/EditProduct/"+product1.id} style={{marginRight: 20}}>Edit</Link>
                            <Link to={"/DiscountProduct/"+product1.id} style={{marginRight: 20}}>Discount</Link>
                            <Button color="danger" size="sm" className="mr-2"
                                    onClick={this.onDeleteClick.bind(this, product1.id)}>Delete
                            </Button>
                        </td>
                    </tr>
                )
            }
        )
        return(

            <div>
                <div style={{marginRight: 2000,marginTop: 20}}>
                    <Link to={"/Products"}>Back</Link>
                </div>
                <h3>Product List</h3>

                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>

                        <th>Name</th>
                        <th>price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody maxWidth= "200">
                    {product}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default  ProductList;



