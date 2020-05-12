import React, {Component} from 'react';
import ProjectBoard from "./components/DisplayAdminandStoreMan";
import AddUserTask from "./components/ProjectTask/AddUserTask";
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import text from "../src/components/images/pic8.gif";
import cry from "../src/components/images/cry.gif";
import "./admin.css";

class Admin extends Component {

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
                            <Route exact path="/Admin" component={ProjectBoard}/>
                            <Route  exact path="/Admin/AddUserTask" component={AddUserTask}/>

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

export default Admin;