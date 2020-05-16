import React, {Component} from 'react';
import axios from 'axios';

const WishLists = props => (

    <p>{props.todo.productName}</p>


)
class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {product:[]};
    }
    componentDidMount() {
        axios.get("http://localhost:8080/wishList/get")
            .then(response=>{
                this.setState({product: response.data});
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    wList() {
        return this.state.product.map(function (current, i) {
            return <WishLists todo={current} key={i}/>;
        });
    }

    render() {
        return (
            <div className={"container"}>
                        <div className="card card-body my-3 col-sm-4">
                            <div className="card-body">
                                {this.wList()}
                                <button type="button" className="btn btn-danger text-white btn-block">Add To Cart
                                </button>
                                <button type="button" className="btn btn-danger text-white btn-block">Remove</button>
                            </div>
                        </div>
            </div>
        )
    }
}
export default WishList;




