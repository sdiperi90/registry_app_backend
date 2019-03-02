import React, { Component } from "react";
import "./styles/style.scss";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import CreateRegistry from "./components/CreateRegistry";
import UserRegistry from "./components/UserRegistry";
import axios from "axios";

class App extends Component {
    state = {
        headerOffset: "",
        user: ""
    };

    componentDidMount = async () => {
        let user = await axios("/auth/current_user");
        console.log(user);
        this.setState({
            user: user.data
        });
    };

    getOffsetHeight = height => {
        this.setState({ headerOffset: height });
    };

    render() {
        return (
            <div className="App">
                <Header
                    getOffsetHeight={this.getOffsetHeight}
                    user={this.state.user}
                />
                <main style={{ paddingTop: `${this.state.headerOffset}px` }}>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home headerOffset={this.state.headerOffset} />
                        )}
                    />

                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route
                        exact
                        path="/registry/create"
                        render={() => (
                            <CreateRegistry
                                headerOffset={this.state.headerOffset}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/user/registry"
                        render={() => <UserRegistry />}
                    />
                </main>

                {/* <Home headerOffset={this.state.headerOffset} /> */}
                <Footer />
            </div>
        );
    }
}

export default App;
