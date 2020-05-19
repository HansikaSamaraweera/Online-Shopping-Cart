import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../category.css";
import axios from "axios";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const url = "/api/categories/all";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({categories: json}))
    }

    onDeleteClick(id){
        axios.delete("/api/categories/delete/" + id).then((response) => {
            window.location.replace("/")
        });
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
                    <div className="card mb-auto" key={post.id} id="catList">
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
                                <p><Link to="/AdminAsCategory/EditCategory"><i className="fas fa-edit"></i></Link>  <i className="fas fa-trash" onClick={this.onDeleteClick.bind(this,post.id)}></i></p>

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
