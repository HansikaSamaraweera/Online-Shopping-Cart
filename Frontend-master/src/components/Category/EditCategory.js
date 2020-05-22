import React, {Component} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCategory,addCategory} from "../../actions/categoryModule";
import {Link} from "react-router-dom";
import qs from "query-string";


class EditCategory extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: '',
            cName: '',
            cType: '',
            cDate: '',
            errors:{}

        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        //alert(qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k);
        axios.get('/api/categories/' +qs.parse(this.props.location.search, { ignoreQueryPrefix: true })._k)
            .then(response => {

                this.setState({
                    id: response.data.id,
                    cName: response.data.cName,
                    cType: response.data.cType,
                    cDate: response.data.cDate

                })


            })
            .catch(function (error) {
                console.log(error)

            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const edit = {
            id: this.state.id,
            cName: this.state.cName,
            cType: this.state.cType,
            cDate: this.state.cDate
        };
        console.log(edit);
        this.props.addCategory(edit, this.props.history);

    }



    render() {
        return (
            <div className="col-md-7 m-auto alert-danger">
                <div className="container" id="updateCategory">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <br/>
                            <Link to="/AdminAsCategory/CategoryList" className="btn btn-outline-success m-3">
                                <i className="fas fa-arrow-alt-circle-left"></i>  Category List
                            </Link>
                            <br/>
                            <h6 className="text-center" id="tit"> Update Category</h6>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    {/*Category Name*/}
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cName"
                                        value={this.state.cName}
                                        placeholder="Category Name"
                                        onChange={this.onChange}
                                        required
                                    />
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
EditCategory.propTypes = {
    errors : PropTypes.object.isRequired,
    getCategory:PropTypes.func.isRequired,
    addCategory:PropTypes.func.isRequired,
    cat_task: PropTypes.object.isRequired
};
const  mapStateToProps = state =>({
    cat_task: state.cat_tasks
});
export default connect(mapStateToProps ,{getCategory,addCategory}) (EditCategory);

