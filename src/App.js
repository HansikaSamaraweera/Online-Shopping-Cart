import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./components/Navigationbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import Admin from "./Admin";
import {Switch} from "react-bootstrap";
import Register from "./components/ProjectTask/Register";
import ProjectBoard from "./components/DisplayAdminandStoreMan";
import AddUserTask from "./components/ProjectTask/AddUserTask";
import LoginPage from "./components/ProjectTask/LoginPage";

class App extends Component{

  render() {
    return (
        <Provider store={store}>
        <Router>
        <div className="App">
            <Navigationbar />



            <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/Admin" component={Admin} />
             <Route path="/login" component={LoginPage} />
             <Route path="/Register" component={Register} />
                {/*Check wheather login person is Admin or not*/}
                <div>
                    {'ADMIN' === 'ADMIN'?
                        <div>
                            <Route exact path="/Admin" component={ProjectBoard}/>
                            <Route  exact path="/Admin/AddUserTask" component={AddUserTask}/>
                        </div>
                        :null
                    }
                </div>
            </Switch>




            <Footer />
        </div>
        </Router>
        </Provider>
  );
  }

}

const Home=()=>(
    <div>Home Page</div>
);

export default App;
