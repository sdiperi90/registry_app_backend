import React, { Component } from "react";

class SignUp extends Component {
    render() {
        return (
            <div class="login-wrap">
                <div class="signup">
                    <div class="signup-connect">
                        <h1>Create your account</h1>
                        <a href="#" class="btn btn-social btn-facebook">
                            <i class="fa fa-facebook" /> Sign in with Facebook
                        </a>
                        <a href="#" class="btn btn-social btn-twitter">
                            <i class="fa fa-twitter" /> Sign in with Twitter
                        </a>
                        <a href="/auth/google" class="google-btn">
                            <img
                                src={require("../images/btn_google_signin_light_normal_web@2x.png")}
                            />
                        </a>
                    </div>
                    <div class="signup-classic">
                        <h2>Or use the classical way</h2>
                        <form class="form">
                            <fieldset class="username">
                                <input type="text" placeholder="username" />
                            </fieldset>
                            <fieldset class="email">
                                <input type="email" placeholder="email" />
                            </fieldset>
                            <fieldset class="password">
                                <input type="password" placeholder="password" />
                            </fieldset>
                            <button type="submit" class="btn">
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
