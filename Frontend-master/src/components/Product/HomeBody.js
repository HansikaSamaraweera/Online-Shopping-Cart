import React, {Component} from 'react';
import ItemHome from "./ItemHome";


class HomeBody extends Component {
    render() {
        return (
            <div className={"container"}>
                {/*<h2 className={"text-capitalize text-center card card-body my-3 bg-info text-white"}> Shopping Cart</h2>*/}
                <div className={"row"}>
                    <div className={" col-10 mx-auto col-md-12 mt-4 jumbotron"}>

                        <ItemHome/>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomeBody;
