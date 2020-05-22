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
        axios.get("/api/categories/all")
            .then(response => {
                this.setState({categories: response.data});
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    onDeleteClick(id){
        if(window.confirm('Do you want to delete this category')) {
            axios.delete("/api/categories/delete/" + id).then((response) => {
                window.location.replace("/AdminAsCategory/CategoryList")
            });
        }
    }



    render() {
        const {categories}=this.state;
        const list =this.state.categories.map((post) => {
                return (
                    <tr key={ post.id}>
                        <td className="text-truncate" id="cs">{post.cName}</td>
                        <td className="text-truncate" id="cs">{post.cType}</td>
                        <td className="text-truncate" id="cs">{post.cDate}</td>
                        <td>
                            <Link to={"/AdminAsCategory/EditCategory/id?_k="+post.id}><i className="fas fa-edit"></i></Link>     <i className="fas fa-trash" onClick={this.onDeleteClick.bind(this,post.id)}></i>
                    </td>
                    </tr>
                )
            }
        );
        return(
        <div id="cs">
            <div className="text-left mb-3">
                <Link to="/AdminAsCategory/AddCategory" className="btn btn-outline-danger"><i
                    className="fas fa-plus-circle"></i> Add New Category
                </Link></div>
            <h1 className="text-capitalize card card-body bg-info text-white">Category List</h1>
                <table className="table table-light table-striped">
                    <thead>
                    <tr>

                        <th className="bg-secondary">Category Name</th>
                        <th className="bg-secondary">Type</th>
                        <th className="bg-secondary">Date</th>
                        <th className="bg-secondary"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {list}

                    </tbody>
                </table>
            </div>
        );
    }
}
export default CategoryList;
