import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../category.css";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/api/categories/all";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({categories: json}))
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="container">
                <br/>
                <div className="text-left mb-3">
                <Link to="/AdminAsCategory/AddCategory" className="btn btn-outline-info" >
                    Add New Category
                </Link></div>
                    <h1 className="bg-primary display-5">Category List</h1>
                {categories.map((post) => (
                    <div className="card w-50 m-auto" key={post.id} id="catList">
                        <div className="col">
                        <div className="card-header">
                            <div className="card mb-sm-n1 bg-light">
                                <div className="card-header text-white bg-success">ID: {post.id}</div>
                                <p className="card-text text-truncate text-center">
                                    Category Name:{post.cName}
                                </p>
                                <p className="card-text text-truncate text-center">
                                    Category Type:{post.cType}
                                </p>
                                <p className="card-text text-truncate text-center">
                                    Date:{post.cDate}
                                </p>
                        </div>

                    </div>
                    </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default CategoryList;
