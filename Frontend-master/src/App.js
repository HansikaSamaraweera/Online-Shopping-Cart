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
import LoginPage from "./components/ProjectTask/LoginPage";
import MyAccount from "./components/ProjectTask/MyAccount";
import ItemHome from "./components/Product/ItemHome";
import ViewCart from "./components/Product/ViewCart";
import HomeBody from "./components/Product/HomeBody";
import Comment from "./components/Product/Comment";
import SessionCon from "./components/ProjectTask/SessionCon";
import AdminAsCategory from "./AdminAsCategory";
import ViewProduct from "./components/Product/ViewProduct";
import Offers from "./components/Category/Offers";
import ResetPassword from "./components/ProjectTask/ResetPassword";
import WhishList_Admin from "./WhishList_Admin";
import WishListSave from "./components/WishList/WishListSave";
import EditProfile from "./components/ProjectTask/EditProfile";
import Products from "./Storeman"
import NavBar from "./components/NavBar";
import SearchPro from "./components/Product/SearchPro";
import Payment from "./components/Product/Payment";
class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App ">
                        <SessionCon/>
                        <NavBar/>
                        <Navigationbar />
                        <Switch>
                            <Route path="/" exact component={HomeBody} />
                            <Route path="/Admin" component={Admin} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/Register" component={Register} />
                            <Route path="/MyAccount" component={MyAccount} />
                            <Route path="/ViewCart" component={ViewCart} />
                            <Route path="/ViewProduct" component={ViewProduct} />
                            <Route path="/Comment" component={Comment} />
                            <Route path="/AdminAsCategory" component={AdminAsCategory} />
                            <Route path="/Offers" component={Offers} />
                            <Route path="/ResetPassword" component={ResetPassword} />
                            <Route path="/EditProfile" component={EditProfile} />
                            <Route path="/WhishList_Admin" component={WhishList_Admin} />
                            <Route path="/WhishList_Admin/WishListSave" component={WishListSave} />
                            <Route path="/Products" component={Products} />
                            <Route path="/Payment" component={Payment}/>

                            <Route path="/Search" component={SearchPro} />
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
