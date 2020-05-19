import React, {Component} from 'react';
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import text from "../src/components/images/pic8.gif";
import cry from "../src/components/images/cry.gif";
import "./admin.css";
import AddCategory from "./components/Category/AddCategory";
import CategoryList from "./components/Category/CategoryList";
import EditCategory from "./components/Category/EditCategory";

class AdminAsCategory extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Provider store={store}>
                <Router>

                    <div>
                        <br/>
                        <div>
                            {sessionStorage.getItem("sessionPost") === 'ADMIN'?
                                <div className="pre-scrollable blockquote h-25" id="scoll">
                                    <Route  exact path="/AdminAsCategory/AddCategory" component={AddCategory}/>
                                    <Route  exact path="/AdminAsCategory/CategoryList" component={CategoryList}/>
                                    <Route  exact path="/AdminAsCategory/EditCategory" component={EditCategory}/>

                                </div>
                                :<div className="text-center">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <img src={text} alt="" /><img src={cry} width="100px" height="100px" alt=""/>
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

export default AdminAsCategory;