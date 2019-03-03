import React, { Component } from "react";
import "./styles/style.scss";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import CreateRegistry from "./components/CreateRegistry";
import Registry from "./components/Registry";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();
class App extends Component {
    state = {
        headerOffset: "",
        user: "",
        registryType: "",
        products: null
    };

    componentDidMount = async () => {
        let user = await axios("/auth/current_user");
        console.log(user);
        this.setState({
            user: user.data,
            registryType: cookies.get("registryType")
        });
        this.getProductData();
    };

    getProductData = async () => {
        let products = await axios("/api/products");
        console.log(products);
        this.setState({
            products: products.data
        });
    };

    getOffsetHeight = height => {
        this.setState({ headerOffset: height });
    };

    getRegistryType = registry => {
        cookies.set("registryType", registry, { path: "/" });

        this.setState({
            registryType: cookies.get("registryType")
        });
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
                                user={this.state.user}
                                getRegistryType={this.getRegistryType}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/registry"
                        render={() => {
                            return this.state.products ? (
                                <Registry
                                    registryType={this.state.registryType}
                                    products={this.state.products}
                                />
                            ) : (
                                "Loading..."
                            );
                        }}
                    />
                </main>

                {/* <Home headerOffset={this.state.headerOffset} /> */}
                <Footer />
            </div>
        );
    }
}

export default App;
