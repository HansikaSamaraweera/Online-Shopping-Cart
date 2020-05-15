import React, {Component} from 'react';
import axios from 'axios';
import qs from "query-string";


const Message = props => (
    <p>{props.product.name}</p>

)
class WishList extends Component{
    constructor(props) {
        super(props);
        this.state = {product:[]};
    }

    componentDidMount() {

        axios.get('http://localhost:8080/api/Products/'+qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k)
            .then(response =>{
                this.setState({
                    name : response.data.name

                });
                console.log(this.state.name);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    wishList(){
        return this.state.product.map(function (current,i) {
            return <Message todo={current} key={i}/>;
        });
    }
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className="card card-body my-3 col-sm-4">
                            <div className="card-body">
                                {this.wishList()}
                                <button type="button" className="btn btn-danger text-white btn-block">Add To Cart
                                </button>
                                <button type="button" className="btn btn-danger text-white btn-block">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WishList;
