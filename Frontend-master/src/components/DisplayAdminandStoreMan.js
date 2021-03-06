import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserItem from "./ProjectTask/UserItem";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getUsers} from "../actions/projectTaskActions";
import MyAccount from "./ProjectTask/MyAccount";


class DisplayAdminandStoreMan extends Component {

    componentDidMount() {
        this.props.getAll();
    }
    render() {
        const {user_tasks}=this.props.user_tasks;
        let displayData;
        let admin=[]
        let stockmanagers=[]

        const displayMain=user_tasks=>{
            if(user_tasks.length<1){
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No Admins and Store Managers
                     </div>
                );
            }else{
                const tasks=user_tasks.map(user_task => (
                    <UserItem key={user_task.id} user_task={user_task}/>
                ));
                for(let i=0;i<tasks.length;i++){
                    if(tasks[i].props.user_task.post==="ADMIN"){
                        admin.push(tasks[i]);
                    };
                    if(tasks[i].props.user_task.post==="STORE_MANAGER"){
                        stockmanagers.push(tasks[i]);
                    };

                }
                return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card text-center  mb-3" >
                                    <div className="card-header  text-primary">
                                        <h3>ADMIN</h3>
                                    </div>

                                </div>
                                {admin}
                            </div>
                            <div className="col-md-6">
                                <div className="card text-center mb-3">
                                    <div className="card-header  text-primary">
                                        <h3>STORE MANAGERS</h3>
                                    </div>
                                </div>
                                {stockmanagers}
                            </div>


                        </div>
                    </div>

                </React.Fragment>
                )
            }
        }
        displayData= displayMain(user_tasks);
        return (
            <div>
                <div className="container">

                    <Link to="/Admin/addUserTask" className="btn btn-outline-danger mb-3" users={user_tasks}>
                        <i className="fas fa-plus-circle"> ADD NEW USER</i>
                    </Link>
                    <br/>
                    <hr/>
                    {displayData}
                </div>
            </div>
        );
    }
}
DisplayAdminandStoreMan.prototypes={
    getAll:PropTypes.func.isRequired,
    user_tasks: PropTypes.object.isRequired
};
const mapStatetoProps=state=>({
    user_tasks: state.user_task
});
export default connect(
    mapStatetoProps,{getAll: getUsers}) (DisplayAdminandStoreMan);