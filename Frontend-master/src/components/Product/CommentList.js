import React, {Component} from 'react';

class CommentList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group  ">
                    <li className="list-group-item">First item</li>
                    <li className="list-group-item">Second item</li>
                    <li className="list-group-item">Third item</li>
                </ul>
            </div>
        );
    }
}

export default CommentList;