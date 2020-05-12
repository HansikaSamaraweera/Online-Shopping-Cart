import React, {Component} from 'react';

class CartList extends Component {
    render() {
        return (
            <div>
            <li className={"list-group-item text-capitalize d-flex justify-content-between my-2"}>
                <h6>Name Of the Item</h6>
                <p className={"text-sm-left"}>Details:Price</p>
                <div className={"todo-icon"}>

                    <span className={"mx-2 text-danger"}>
                        <i className={"fas fa-trash"}></i>
                    </span>

                </div>
            </li>
                <div >
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartList;
