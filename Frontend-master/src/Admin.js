import React, {Component} from 'react';
import ProjectBoard from "./components/DisplayAdminandStoreMan";
import AddUserTask from "./components/ProjectTask/AddUserTask";
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";

class Admin extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Provider store={store}>
                <Router>

            <div>
                <p>Admin DashBoard</p>
                <div>
                    {sessionStorage.getItem("sessionPost") === 'ADMIN'?
                        <div>
                            <Route exact path="/Admin" component={ProjectBoard}/>
                            <Route  exact path="/Admin/AddUserTask" component={AddUserTask}/>

                        </div>
                        :null
                    }
                </div>

            </div>
                </Router>
            </Provider>
        );
    }
}

export default Admin;