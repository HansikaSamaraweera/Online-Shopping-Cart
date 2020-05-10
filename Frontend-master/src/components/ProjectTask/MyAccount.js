import React, {Component} from 'react';

class MyAccount extends Component {
    onClickMethod=()=>{
        window.localStorage.setItem('CREDENTIALS_FLUSH', Date.now().toString())
        window.localStorage.removeItem('CREDENTIALS_FLUSH')
        console.log("sign out");
        sessionStorage.clear();
        window.location.replace("/login");

    }


    render() {
        if(sessionStorage.getItem("sessionName")!==null) {
            return (
                <div>
                    <h1>My Account</h1>

                    <button onClick={this.onClickMethod}>Sign Out</button>
                    <h1>{sessionStorage.getItem("sessionName")}</h1>


                </div>
            );
        }else{
            return (<div> {window.location.replace("/login")} </div>);
        }
    }
}

export default MyAccount;