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
            <div className="container" id="cs">
                <br/>
                <div className="text-left mb-3">
                <Link to="/AdminAsCategory/AddCategory" className="btn btn-outline-info" >
                    Add New Category
                </Link></div>
                    <h1 className="bg-primary display-5">Category List</h1>
                {categories.map((post) => (
                    <div className="card" key={post.id} id="catList">
                        <div className="row-cols-7">
                            <div className="col-md-6">
                        <div className="card-header">
                            <div className="card mb-sm-n1 bg-light">
                                <p className="card-text text-truncate text-center">
                                    Category Name:{post.cName}
                                </p>
                                <p className="card-text text-truncate text-center">
                                    Category Type:{post.cType}
                                </p>
                                <p className="card-text text-truncate text-center">
                                    Date:{post.cDate}
                                </p>
                                <p><i className="fas fa-edit"></i>  <i className="fas fa-trash"></i></p>

                        </div>
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
