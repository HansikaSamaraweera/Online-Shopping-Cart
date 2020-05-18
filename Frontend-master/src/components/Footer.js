import React, {Component} from 'react';
import "../admin.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer navbar navbar-fixed-bottom justify-content-center">
                <div className="alert-dismissible">
                    <p className="footer-text" id="fot">® 2020 The Fashion District, Inc. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
