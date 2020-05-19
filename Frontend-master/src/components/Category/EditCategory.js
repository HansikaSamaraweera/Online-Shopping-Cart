import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {updateCategory} from "../../actions/categoryModule";
import classnames from "classnames";
import "../../category.css";
import axios from "axios";

class EditCategory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cName: "",
            cType: "",
            cDate: "",
            categoryUp:[],
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const url = "/api/categories/all";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({categoryUp: json}))
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const editCategory = {
            cName: this.state.cName,
            cType: this.state.cType,
            cDate: this.state.cDate
        };
        // console.log(editCategory);
        this.props.updateCategory(editCategory, this.props.history);
    }

    render() {
        const { errors } = this.state;
        const { categoryUp } = this.state;
        return (
            <div className="col-md-7 m-auto alert-danger">
                <div className="container" id="addCategory">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <br/>
                            <h6 className="text-center" id="tit">Update Category</h6>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    {/*Category Name*/}
                                    <input
                                        type="text"
                                        className={classnames("form-control", {
                                            "is-invalid": errors.cName
                                        })}
                                        name="cName"
                                        placeholder="Category Name"
                                        value={this.state.categoryUp.cName}
                                        onChange={this.onChange}
                                        required
                                    />
                                    {errors.cName && (
                                        <div className="invalid-feedback">{errors.cName}</div>
                                    )}
                                </div>
                                {/*Category Type*/}
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        name="cType"
                                        value={this.state.categoryUp.cType}
                                        onChange={this.onChange}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="PREMIUM COLLECTION">PREMIUM COLLECTION</option>
                                        <option value="LINEN COLLECTION">LINEN COLLECTION</option>
                                    </select>
                                </div>
                                {/*Date*/}
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="cDate"
                                        value={this.state.categoryUp.cDate}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>

                                <input type="submit" value="Update" className="btn btn-primary btn-block col-md-7 m-auto"/>
                                <br/>
                            </form>
                            <p><br/><br/></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
updateCategory.propTypes = {
    updateCategory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateCategory }
)(EditCategory);
