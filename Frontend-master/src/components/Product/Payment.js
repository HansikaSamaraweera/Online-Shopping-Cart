import React, {Component} from 'react';
import {Link} from "react-router-dom";
import qs from 'query-string';

class Payment extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            total : qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k,
            day: (new Date().getDate() + "/"+ parseInt(new Date().getMonth()+1) +"/"+ new Date().getFullYear()).toLocaleString(),
            user:sessionStorage.getItem("sessionName")
        }
    }
    payment(){
        alert(" Paid Successfully! ")
    }


    render() {
        return (
            <div>
                <div className={"container"}>
                    <h2 className={"text-capitalize text-center card card-body my-3 bg-info text-white"}>Payment Details : {this.state.user}</h2>
                    <h5 className={"text-capitalize text-center"}>{this.state.day}</h5>
                    <div className={"row"}>
                        <div className={" col-10 mx-auto col-md-12 mt-4 jumbotron"}>
                        <form>
                        <div className="card card-body my-3 col-sm-4">
                            <h6 htmlFor="exampleInputEmail1" className="card-header">Select Payment Method</h6>

                            <div className="card-body">
                            <select  className=" dropdown-toggle dropdown-header">
                                <option value="volvo" className="dropdown-item">Pay pal</option>
                                <option value="saab" className="dropdown-item">Visa</option>
                                <option value="fiat" className="dropdown-item">mCash</option>
                                <option value="audi" className="dropdown-item">eZcash</option>
                            </select>
                            <h1></h1>
                            <div className="d-flex justify-content-center ">
                                <h5>Total price :</h5>
                                <h5>Rs.{this.state.total}</h5>

                            </div>

                            <button type="button" className="btn btn-primary btn-block" onClick={this.payment}>Make Payment</button>
                        </div>
                        </div>
                            </form>

                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Payment;
