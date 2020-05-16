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
    editProduct(id,name,price,category){
        console.log(id)
        this.setState({
            editProductData: {id, name, price, category}, editProductModal: !this.state.editProductModal
        });

    }
    toggleEditProductModal(){
        this.setState({
            editProductModal: ! this.state.editProductModal
        })
    }
    updateProduct(){

    }



    render() {
        let product = this.state.product.map((product1) => {
            return(
                <tr key={ product1.id}>
                    <td>{product1.name}</td>
                    <td>{product1.price}</td>
                    <td>{product1.category}</td>
                    <td>
                        <Link to={"/EditProduct/"+product1.id}>Edit</Link>
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
                <h3>Product List</h3>
                {/*
                <Modal isOpen={this.state.editProductModal} toggle={this.toggleEditProductModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditProductModal.bind(this)}>Edit a Book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label> Name:</label>
                            <Input type="text" value={this.state.editProductData.name} onChange={(e) => {
                                let {editProductData} = this.state;
                                editProductData.name = e.target.value;
                                this.setState({editProductData});
                            }}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input id="price" value={this.state.editProductData.price} onChange={(e) => {
                                let {editProductData} = this.state;
                                editProductData.price = e.target.value;
                                this.setState({editProductData});
                            }}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input id="category" value={this.state.editProductData.category} onChange={(e) => {
                                let {editProductData} = this.state;
                                editProductData.category = e.target.value;
                                this.setState({editProductData});
                            }}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateProduct.bind(this)}>Update Product</Button>{''}

                    </ModalFooter>

                </Modal>
                */}

                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>

                        <th>Name</th>
                        <th>price</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    {product}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default  ProductList;



