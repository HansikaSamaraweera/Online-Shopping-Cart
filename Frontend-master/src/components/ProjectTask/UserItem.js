import React, {Component} from 'react';

class UserItem extends Component {
    render() {

        const {user_task}=this.props;
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    ID: {user_task.id}
                </div>
                <div className="card-body bg-light">
                    <p className="card-text text-truncate ">
                        {user_task.name}
                    </p>
                    <p className="card-text text-truncate ">
                        {user_task.email}
                    </p>

                </div>
            </div>
        );
    }
}

export default UserItem;