import React from "react";

const Footer = () => {
    return (
        <div>
            <hr />
            <div className="footer-img">
                <img src={require("../images/logo5.png")} />
            </div>
            <div className="copy-right">
                <h3>Registry Help</h3>
                <p> &copy; 2019 sdiperi</p>
            </div>
        </div>
    );
};
export default Footer;
