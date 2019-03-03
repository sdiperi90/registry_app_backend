import React, { Component } from "react";
import ProductList from "../components/ProductList";

class Registry extends Component {
    state = {};

    handleItemsDisplay(item) {
        const newState = {};
        newState[item] = true;
        this.setState(newState);
    }

    render() {
        let { registryType } = this.props;
        let registryTypeClass = `${registryType.split(" ")[0]}-background`;
        return (
            <div className="registry-container">
                {/* <div>
                    <p>your registry items</p>
                    <p>add products</p>
                </div> */}
                <div
                    className={`registry-img-container ${
                        registryType ? registryTypeClass : ""
                    }`}
                />

                <button>manage items</button>
                <button>add items</button>
                <ProductList products={this.props.products} />
            </div>
        );
    }
}

export default Registry;
