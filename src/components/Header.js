import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../config";

class Header extends Component {
    componentDidMount() {
        let { offsetHeight } = this.refs.header;
        this.props.getOffsetHeight(offsetHeight);
    }

    render() {
        return (
            <header ref="header">
                <div className="row">
                    <Link to="/">
                        <div>
                            <img
                                className="logo"
                                src={require("../images/free-gift.gif")}
                                alt="logo"
                            />
                        </div>
                    </Link>

                    <Link to="/">
                        <span className="title">Perfect Gift</span>
                    </Link>
                    {this.props.user ? (
                        <div className="row">
                            <Link to="/dashboard">
                                <p>My Registry</p>
                            </Link>
                            <h2>Hello {this.props.user.first_name} </h2>
                            <a href={`${apiUrl}/auth/logout`}>
                                <button>Log out</button>
                            </a>
                        </div>
                    ) : (
                            <Link to="/signup">
                                <div className="sign-in">
                                    <div className="user-icon">
                                        <i className="far fa-user-circle" />
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <span>sign in / sign up</span>
                                </div>
                            </Link>
                        )}
                </div>
            </header>
        );
    }
}
export default Header;
