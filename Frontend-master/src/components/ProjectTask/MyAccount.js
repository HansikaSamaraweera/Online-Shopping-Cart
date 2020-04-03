import React, {Component} from 'react';

class MyAccount extends Component {
    onClickMethod(){
        console.log("sign out");
        sessionStorage.clear();
        window.location.replace("/login")
    }


    render() {
        return (
            <div>
               <h1>My Account</h1>

                <button onClick={this.onClickMethod}>Sign Out</button>
                <h1>hello</h1>


            </div>
        );
    }
}

export default MyAccount;