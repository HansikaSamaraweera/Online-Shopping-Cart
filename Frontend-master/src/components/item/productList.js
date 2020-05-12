import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Product = props => (
    <tr>

        <td className={props.product.product_completed ? 'completed' : ''}>{props.product.name}</td>
        <td className={props.product.product_completed ? 'completed' : ''}>{props.product.price}</td>
        <td className={props.product.product_completed ? 'completed' : ''}>{props.product.category}</td>
        <td className={props.product.product_completed ? 'completed' : ''}>
            <Link to={"/EditProduct/"+props.product.id}>Edit</Link>
        </td>
    </tr>
)

export default class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {product:[]};

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

    productList(){
        return this.state.product.map(function (currentProduct,i) {
            return<Product product={currentProduct} key={i} />;
        });
    }

    render() {
        return(

            <div>
                <h3>Product List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>

                        <th>Name</th>
                        <th>price</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.productList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
