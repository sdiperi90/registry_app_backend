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
import Dashboard from "./components/Dashboard";
const cookies = new Cookies();

class App extends Component {
    state = {
        headerOffset: "",
        user: "",
        registryType: "",
        products: null,
        events: [],
        manageItems: false,
        addItems: false,
        registryItems: []
    };

    componentDidMount = async () => {
        let user = await axios("/auth/current_user");
        console.log(user);
        this.setState({
            user: user.data,
            registryType: cookies.get("registryType")
        });
        this.getProductData();
        this.fetchEvent();
    };

    fetchEvent = async () => {
        let events = await axios(`/api/event/${this.state.user.user_id}`);
        this.setState({
            events: events.data
        });
        console.log(events);
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

    handleItemsDisplay = (e, btn) => {
        e.preventDefault();
        if (btn == "manageItems") {
            this.setState({ manageItems: true, addItems: false });
        } else {
            this.setState({ manageItems: false, addItems: true });
        }
    };

    handleAddingItems = async obj => {
        this.setState(prev => {
            return {
                registryItems: [...prev.registryItems, obj]
            };
        });
        console.log("working");

        // let newItem = {
        //     purchased: false,
        //     favorites: false,
        //     // event_id: this.state.year_built,
        //     product_id: obj.product_id
        // };
        // console.log(newItem);

        // await axios.post("/api/presents", newBuilding);

        // this.setState({
        //     building: newBuilding,
        //     created: true
        // });
    };

    handleRemoveItems = obj => {
        this.setState(prev => {
            return {
                registryItems: prev.registryItems.filter(item => {
                    return item.product_id !== obj.product_id;
                })
            };
        });
    };

    render() {
        let {
            headerOffset,
            products,
            user,
            registryType,
            events,
            registryItems,
            manageItems,
            addItems
        } = this.state;
        return (
            <div className="App">
                <Header getOffsetHeight={this.getOffsetHeight} user={user} />
                <main style={{ paddingTop: `${headerOffset}px` }}>
                    <Route
                        exact
                        path="/"
                        render={() => <Home headerOffset={headerOffset} />}
                    />

                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route
                        exact
                        path="/registry/create"
                        render={() => (
                            <CreateRegistry
                                headerOffset={headerOffset}
                                user={user}
                                getRegistryType={this.getRegistryType}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/registry"
                        render={() => {
                            return products ? (
                                <Registry
                                    registryType={registryType}
                                    registryItems={registryItems}
                                    handleItemsDisplay={this.handleItemsDisplay}
                                    handleAddingItems={this.handleAddingItems}
                                    handleRemoveItems={this.handleRemoveItems}
                                    products={products}
                                    manageItems={manageItems}
                                    addItems={addItems}
                                />
                            ) : (
                                "Loading..."
                            );
                        }}
                    />

                    <Route
                        exact
                        path="/events/:id"
                        render={() => {
                            return products ? (
                                <Registry
                                    registryType={registryType}
                                    registryItems={registryItems}
                                    handleItemsDisplay={this.handleItemsDisplay}
                                    handleAddingItems={this.handleAddingItems}
                                    handleRemoveItems={this.handleRemoveItems}
                                    products={products}
                                    manageItems={manageItems}
                                    addItems={addItems}
                                />
                            ) : (
                                "Loading..."
                            );
                        }}
                    />

                    <Route
                        exact
                        path="/dashboard"
                        render={() => {
                            return <Dashboard user={user} events={events} />;
                        }}
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
