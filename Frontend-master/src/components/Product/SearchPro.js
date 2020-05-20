import React, {Component} from 'react';
import axios from "axios";
import "../../admin.css";
import p1 from "../images/pic1.gif";
import {Link} from "react-router-dom";

class SearchPro extends Component {

    constructor() {
        super();
        this.state={
            products : [],
            products1 : [],
            name:"",
            history:[],
            ff:""

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        //http://localhost:3500/ for run in local machine https://genuine-episode-247219.el.r.appspot.com/  express has deployed in cloud.can use this url.instead of localhost
        axios.get("http://localhost:3500/expressapi/getHistory")
            .then(response => {
                this.setState({history: response.data});
                console.log(this.state);
            } )
            .catch(function (error) {
                console.log(error);

            })

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.name=this.state.name;
        console.log(this.name);
        this.name=this.state.name;

        this.setState({products: []});

        axios.get("http://localhost:3500/expressapi/getByName/"+this.name)
            .then(response => {
                this.setState({products: response.data});
                if(this.state.products.length >= 1) {
                    this.func2(this.name)
                }else{
                    alert("Details not found.....Please refer most searched categories.")
                }
            } )
            .catch(function (error) {
                console.log(error);

            })
    }
    func2(kk){
        let y="";
        this.state.history.map(check=>{
            console.log(check.name);
            if(check.name===kk){
                y="done";
            }
        }
        )
        if(y!=="done") {
            this.func1(kk);
        }
    }
    func1(kk){
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: kk,
                })
            };
            fetch('http://localhost:3500/expressapi/addHistory', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({newuser: data.id}));
        }

        onSubmit123(id){
        axios.delete("http://localhost:3500/expressapi/delete/"+id ).then((response) => {
            window.location.replace("/Search")
        });
        }


        render() {
       const {products} = this.state;
        const {products1} = this.state;
       const {history}=this.state;

       return (
           <div>

               <div className="pre-scrollable" id="s1">
                   <br/>
                   <img src={p1} height="250" width="300" alt=""/>
                   <br/><br/>
                   <form onSubmit={this.onSubmit} className="btn-group-toggle">
                       <input type="text" name="name" onChange={this.onChange} className={"btn-primary" } value={this.state.name["name"]}/>
                       <button type="submit" className={"btn-primary"} onChange={this.onChange}>Search Categories</button>
                   </form>
               </div>
               <div className="container col-md-3 m-auto btn-group-toggle">
                   <br/>
                   {products.map((post) => (
                       <div className="card" key={post.name}>
                       <div className="card-header "> {post.name} #{post.category} </div>
                       <div className="card-body"><p className="card-text">Rs.{post.price}.00</p>
                           <button className="alert-dark"><Link to={"/ViewProduct/id?_k="+post._id}>View More</Link></button>
                       </div>
                   </div>))}       </div>

               <div className="col-md-3 m-auto btn-group-toggle">
                   <br/>
                   <h5 id="s0">Most Searched Categories.........</h5>
                   <br/>
                   {history.map((post123) => (
                       <div className="card">
                                   <div className="btn-group display-6"><h6 id={"s7"}>{post123.name}</h6>
                                       {sessionStorage.getItem("sessionPost") === 'STORE_MANAGER'?
                                           <button id="s5" className="alert-light" type="submit" onClick={this.onSubmit123.bind(this,post123._id)} >Clear</button>
                                           :null
                                       }
                                   </div>
                                   </div>


                       ))
                                   }
               </div>
               <br/><br/>

           </div>
        );
    }
}

export default SearchPro;