import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addCategory} from "../../actions/categoryModule";
import classnames from "classnames";


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
            <div className="addCategory">
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/AdminAsCategory/CategoryList" className="btn btn-group-lg btn-block btn-success">
                                Category List
                            </Link>
                            <br/>
                            <div className="container">
                            <h2 className="text-center">
                                Add Category
                            </h2>
                                <div className='col-sm-12'>
                            <form onSubmit={this.onSubmit} className="form-horizontal">
                                <div className="jumbotron">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.cName
                                        })}
                                        name="cName"
                                        value={this.state.cName}
                                        placeholder="Category Name"
                                        onChange={this.onChange}
                                    />
                                    {errors.cName && (
                                        <div className="invalid-feedback">{errors.cName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="cType"
                                        value={this.state.cType}
                                        onChange={this.onChange}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="PREMIUM COLLECTION">PREMIUM COLLECTION</option>
                                        <option value="LINEN COLLECTION">LINEN COLLECTION</option>
                                    </select>
                                </div>
                                <div className="form-group">
                  <input
                      type="date"
                      className="form-control form-control-lg"
                      name="cDate"
                      value={this.state.cDate}
                      onChange={this.onChange}
                  />
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                                </div>
                            </form>
                                </div>

                            </div>
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
