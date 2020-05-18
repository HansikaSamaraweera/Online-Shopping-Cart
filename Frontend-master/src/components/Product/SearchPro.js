import React, {Component} from 'react';
import axios from "axios";

class SearchPro extends Component {

    constructor() {
        super();
        this.state={
            products : [],
            name:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.name=this.state.name;
        console.log(this.name);

        this.name=this.state.name;
        axios.get("http://localhost:3500/expressapi/getByName/"+this.name)
            .then(response => {
                this.setState({products: response.data});
                console.log(this.state);
            } )
            .catch(function (error) {
                console.log(error);

            })

    }

    render() {
       const {products} = this.state;
       return (
           <div>
               <div>
                   <br/>
                   <form onSubmit={this.onSubmit} className="btn-group-toggle">
                       <input type="text" name="name" onChange={this.onChange} className={"btn-primary" } value={this.state.name["name"]}/>
                       <button type="submit" className={"btn-primary"} onChange={this.onChange}>Search Categories</button>
                   </form>
               </div>
               <div className="container btn-outline-mdb-color">
                   <br/>
                   {products.map((post) => (
                       <div className="card" key={post.name}>
                       <div className="card-header"> {post.name} #{post.category} </div>
                       <div className="card-body"><p className="card-text">Rs.{post.price}.00</p></div>
                   </div>))}       </div>

           </div>
        );
    }
}

export default SearchPro;