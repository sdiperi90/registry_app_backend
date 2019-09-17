import React, { Component } from "react";
import { apiUrl } from "../config";

class SignUp extends Component {
    render() {
        return (
            <div className="login-wrap">
                <div className="signup">
                    <div className="signup-connect">
                        <h1>Create your account</h1>
                        <a href="#" className="btn btn-social btn-facebook">
                            <i className="fa fa-facebook" /> Sign in with
                            Facebook
                        </a>
                        <a href="#" className="btn btn-social btn-twitter">
                            <i className="fa fa-twitter" /> Sign in with Twitter
                        </a>
                        <a href={`${apiUrl}/auth/google`} className="google-btn">
                            <img
                                src={require("../images/btn_google_signin_light_normal_web@2x.png")}
                            />
                        </a>
                    </div>
                    <div className="signup-classic">
                        <h2>Or use the classical way</h2>
                        <form className="form">
                            <fieldset className="username">
                                <input type="text" placeholder="username" />
                            </fieldset>
                            <fieldset className="email">
                                <input type="email" placeholder="email" />
                            </fieldset>
                            <fieldset className="password">
                                <input type="password" placeholder="password" />
                            </fieldset>
                            <button type="submit" className="btn">
                                sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
