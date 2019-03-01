import React, { Component } from "react";
import "./styles/style.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home>Home Component</Home>
                <Footer />
            </div>
        );
    }
}

export default App;
