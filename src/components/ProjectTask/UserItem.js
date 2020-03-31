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
                    <h5 className="card-title">Status</h5>
                    <p className="card-text text-truncate ">
                        {user_task.name}
                    </p>
                    <a href="/" className="btn btn-primary">
                        View / Update
                    </a>

                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default UserItem;