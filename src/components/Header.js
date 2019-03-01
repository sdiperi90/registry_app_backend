import React from "react";

const Header = () => {
    return (
        <header>
            <div>
                <img
                    className="logo"
                    src={require("../images/free-gift.gif")}
                    alt="logo"
                />
            </div>
            <button>Sign In</button>
        </header>
    );
};
export default Header;
