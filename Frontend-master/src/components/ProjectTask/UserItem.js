import React, {Component} from 'react';
import "../../admin.css";

class UserItem extends Component {
    render() {

        const {user_task}=this.props;
        return (
            <div className="card mb-1 " id="postDis">

                <div className=" m-3 text-black">
                    ID: {user_task.id}
                </div>
                <div className="">
                    <p className="text-black font-weight-bold ">
                        Username: {user_task.name}
                    </p>
                    <p className="text-truncate ">
                        Email: {user_task.email}
                    </p>

                </div>
            </div>
        );
    }
}

export default UserItem;