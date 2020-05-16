import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addCategory} from "../../actions/categoryModule";
import classnames from "classnames";
import "../../category.css";

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cName: "",
            cType: "",
            cDate: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newCategory = {
            cName: this.state.cName,
            cType: this.state.cType,
            cDate: this.state.cDate
        };
        // console.log(newCategory);
        this.props.addCategory(newCategory, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="col-md-7 m-auto alert-light">
                <div className="container" id="addCategory">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <br/>
                            <Link to="/AdminAsCategory/CategoryList" className="btn btn-block-success m-3">
                                Category List
                            </Link>
                            <br/>
                            <h6 className="text-center" id="tit"> Add Category</h6>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    {/*Category Name*/}
                                    <input
                                        type="text"
                                        className={classnames("form-control", {
                                            "is-invalid": errors.cName
                                        })}
                                        name="cName"
                                        value={this.state.cName}
                                        placeholder="Category Name"
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
                                        value={this.state.cType}
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
                                        value={this.state.cDate}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block col-md-7 m-auto"/>
                                <br/>
                            </form>
                            <p><br/><br/><br/></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addCategory }
)(AddCategory);
