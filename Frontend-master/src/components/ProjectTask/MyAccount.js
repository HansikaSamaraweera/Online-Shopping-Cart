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
                <h3>hello5</h3>


            </div>
        );
    }
}

export default MyAccount;