import React, {Component} from 'react';
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import WishList from "./components/WishList/WishList";


class WhishList_Admin extends Component {

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
                            {sessionStorage.getItem("sessionPost") === 'CUSTOMER'?
                                <div className="pre-scrollable blockquote h-25">
                                    <Route  exact path="/WhishList_Admin/WishList" component={WishList}/>

                                </div>
                                :<div className="text-center">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h3>My WishList</h3><br/>
                                    <p>WishList is not saved permanently yet. Please log in or Create Account to save it.</p><br/>
                                    <p>No items!</p>
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

export default WhishList_Admin;