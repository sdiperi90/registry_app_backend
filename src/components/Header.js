import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    componentDidMount() {
        let { offsetHeight } = this.refs.header;
        console.log(this.refs.header.offsetHeight);
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
                        <div>
                            <h2>Hello {this.props.user.first_name} </h2>
                            <a href="/auth/logout">
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
