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
import RegistrySearchResult from "./components/RegistrySearchResult";
import { apiUrl } from './config'
const cookies = new Cookies();


class App extends Component {
    state = {
        headerOffset: "",
        user: "",
        registryType: "",
        products: null,
        events: [],
        eventId: null,
        manageItems: false,
        addItems: false,
        registryItems: [],
        productAdded: false
    };

    componentDidMount = async () => {
        let user = await axios(`${apiUrl}/auth/current_user`);
        console.log(user);
        // this.setState({
        //     user: user.data,
        //     registryType: cookies.get("registryType"),
        //     eventId: cookies.get("event_id")
        // });
        // this.getProductData();
        // this.fetchEvent();
        // this.fetchRegistryItem();
    };

    fetchEvent = async () => {
        let events = await axios(`${apiUrl}/api/event/${this.state.user.user_id}`);
        this.setState({
            events: events.data
        });
    };

    getProductData = async () => {
        let products = await axios(`${apiUrl}/api/products`);
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

    getEventId = id => {
        console.log(id);
        cookies.set("event_id", id, { path: "/" });

        this.setState({
            eventId: cookies.get("event_id")
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
        let newItem = {
            purchased: false,
            favorites: false,
            event_id: this.state.eventId,
            product_id: obj.product_id
        };

        let registryItems = await axios.post(`${apiUrl}/api/presents`, newItem);
        console.log(registryItems.data);

        if (registryItems.data.length > 0) {
            let addedItems = registryItems.data.map(item => {
                // console.log(item["product.img"]);
                return {
                    img: item["product.img"],
                    price: item["product.price"],
                    product_description: item["product.product_description"],
                    product_name: item["product.product_name"],
                    product_id: item["product.product_id"],
                    event_id: item.event_id,
                    present_id: item.present_id
                };
            });

            this.setState({
                registryItems: addedItems
            });
        }
    };

    handleRemoveItems = async obj => {
        console.log(obj);
        let updatedRegistryItem = await axios.delete(
            `${apiUrl}/api/presents/${obj.present_id}`
        );
        console.log(obj);
        this.setState(prev => {
            return {
                registryItems: prev.registryItems.filter(item => {
                    return item.product_id !== obj.product_id;
                })
            };
        });
    };

    fetchRegistryItem = async () => {
        let registryItems = await axios(`${apiUrl}/api/presents/${this.state.eventId}`);
        if (registryItems.data.length > 0) {
            let addedItems = registryItems.data.map(item => {
                // console.log(item["product.img"]);
                return {
                    img: item["product.img"],
                    price: item["product.price"],
                    product_description: item["product.product_description"],
                    product_name: item["product.product_name"],
                    product_id: item["product.product_id"],
                    event_id: item.event_id,
                    present_id: item.present_id,
                    registryType: item["event.type"]
                };
            });

            console.log("working", registryItems.data[0]);

            this.setState({
                registryItems: addedItems,
                registryType: registryItems.data[0]["event.type"]
            });
        }
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
            addItems,
            eventId
        } = this.state;
        return (
            <div className="App">
                <Header getOffsetHeight={this.getOffsetHeight} user={user} />
                <main style={{ paddingTop: `${headerOffset}px` }}>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home
                                headerOffset={headerOffset}
                                getEventId={this.getEventId}
                                fetchRegistryItem={this.fetchRegistryItem}
                            />
                        )}
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
                                getEventId={this.getEventId}
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
                                    eventId={eventId}
                                    fetchRegistryItem={this.fetchRegistryItem}
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
                                    eventId={eventId}
                                    fetchRegistryItem={this.fetchRegistryItem}
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
                            return (
                                <Dashboard
                                    user={user}
                                    events={events}
                                    getEventId={this.getEventId}
                                />
                            );
                        }}
                    />
                    <Route
                        exact
                        path="/registry/search/:event_id"
                        render={() => {
                            return this.state.eventId ? (
                                <RegistrySearchResult
                                    getEventId={this.getEventId}
                                    registryType={registryType}
                                    registryItems={registryItems}
                                    fetchRegistryItem={this.fetchRegistryItem}
                                    registryType={registryType}
                                />
                            ) : (
                                    "Loading..."
                                );
                        }}
                    />
                    s
                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
