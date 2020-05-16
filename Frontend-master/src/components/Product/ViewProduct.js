import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import qs from 'query-string';
import {addComment} from "../../actions/ProductAction";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addItem} from "../../actions/ProductAction";

class ViewProduct extends Component {

    constructor(props) {
        super(props);
        this.state ={
            name : "",
            category:"",
            price:"",
            id:"",
            itemNo : "",
            pName:"",
            user:"",
            curTime : new Date().toLocaleString(),
            day: (new Date().getDate() + "/"+ parseInt(new Date().getMonth()+1) +"/"+ new Date().getFullYear()).toLocaleString()
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

        axios.get('http://localhost:8080/api/Products/'+qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k)
            .then(responce =>{
                this.setState({
                    name : responce.data.name,
                    category : responce.data.category,
                    price: responce.data.price,
                    id : responce.data.id
                });
                console.log(this.state.name);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onSubmit(e){
        e.preventDefault();
    if(sessionStorage.getItem("sessionName")==null) {
        alert("You Should Register or Login First!!!")
        window.location.replace("/Login")
    }else {
        const newCart = {
            itemNo: this.state.id,
            pname: this.state.name,
            user: sessionStorage.getItem("sessionName"),
            price: this.state.price,
            date: this.state.curTime
        };
        this.props.addItem(newCart, this.props.history)
        alert("Added to Cart!")
    }
    }

    handleOnClick(){

        this.props.history.push('/ViewCart/'+this.state.id)
    }

    render() {
        return (
            <div className={"container"} >
                <div className={"row"}>
                    <div className={"col"} style={{backgroundColor:"lavender"}}>
                        <div className="card card-body my-3 col-sm-4">
                            <img className="card-img-top"  alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.name} </h5>
                                <p className="card-text"> {this.state.category} </p>
                                <h6 className="card-text">{this.state.price} </h6>
                                <h6 className="card-text"> </h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                {/*<Link  to="/ViewCart" className="btn btn-primary btn-block"></Link>*/}
                                <form onSubmit={this.onSubmit}>
                                <button type="submit" className="btn btn-primary btn-block" onClick={'/ViewCart/'+this.state.id} >Add To Cart</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
addItem().propTypes ={
    addItem:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps= state=>({
    errors: state.errors
});

export default connect(mapStateToProps,{addItem}) (ViewProduct);
