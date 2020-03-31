import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ProjectBoard from "./components/DisplayAdminandStoreMan";
import AddUserTask from "./components/ProjectTask/AddUserTask";
import store from "./store";
import {Provider} from "react-redux";
class Admin extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <p>Admin DashBoard</p>

                <div>
                    {console.log("check")}
                    {'ADMIN' === 'ADMIN'?
                        <div>

                        </div>
                        :
                        <div> <p>Access Restricted</p></div>
                    }
                </div>


            </div>

        );
    }
}

export default Admin;