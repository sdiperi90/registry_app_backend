import React, { Component } from "react";
import ProductList from "../components/ProductList";
import RegistryItemList from "../components/RegistryItemList";

class Registry extends Component {
    state = {
        manageItems: false,
        addItems: false,
        registryItems: []
    };

    handleItemsDisplay = (e, btn) => {
        e.preventDefault();
        if (btn == "manageItems") {
            this.setState({ manageItems: true, addItems: false });
        } else {
            this.setState({ manageItems: false, addItems: true });
        }
    };

    handleAddingItems = obj => {
        this.setState(prev => {
            return {
                registryItems: [...prev.registryItems, obj]
            };
        });
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

                <button
                    onClick={e => {
                        return this.handleItemsDisplay(e, "manageItems");
                    }}
                >
                    manage items
                </button>
                <button
                    onClick={e => {
                        return this.handleItemsDisplay(e, "addItems");
                    }}
                >
                    add items
                </button>
                {this.state.addItems ? (
                    <ProductList
                        products={this.props.products}
                        handleAddingItems={this.handleAddingItems}
                    />
                ) : (
                    <RegistryItemList
                        handleRemoveItems={this.handleRemoveItems}
                        registryItems={this.state.registryItems}
                    />
                )}
            </div>
        );
    }
}

export default Registry;
