import React, {Component} from 'react';
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import CreateProduct from "./components/item/CreateProduct";
import HomeBody from "./components/Product/HomeBody";
import ProductList from "./components/item/ProductList";
import EditProduct from "./components/item/EditProduct";

class Storeman extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.localStorage.setItem('REQUESTING_SHARED_CREDENTIALS', Date.now().toString())
        window.localStorage.removeItem('REQUESTING_SHARED_CREDENTIALS')
    }
    render() {
        return (

            <Provider store={store}>
                <Router>

                    <div>
                        <br/>
                        <div>
                            {sessionStorage.getItem("sessionPost") === 'STORE_MANAGER'?
                                <div className="pre-scrollable blockquote h-25" id="scoll">
                                    <Route exact path="/Products" component={CreateProduct}/>
                                    <Route exact path="/ProductList" component={ProductList}/>
                                    <Route  path="/EditProduct" component={EditProduct}/>


                                </div>
                                :<div className="text-center">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Route  path="/" component={HomeBody}/>
                                    <br/>
                                </div>
                            }
                        </div>

                    </div>
                </Router>
            </Provider>
        );
    }
}
//check changes 123

export default Storeman;
