import React, { Component } from "react";
import ProductList from "../components/ProductList";
import RegistryItemList from "../components/RegistryItemList";

class Registry extends Component {
    render() {
        let {
            products,
            registryType,
            registryItems,
            handleAddingItems,
            handleRemoveItems,
            handleItemsDisplay,
            fetchRegistryItem,
            manageItems,
            addItems,
            eventId
        } = this.props;

        let registryTypeClass = `${registryType.split(" ")[0]}-background`;
        return (
            <div className="registry-container">
                <div
                    className={`registry-img-container ${
                        registryType ? registryTypeClass : ""
                    }`}
                />

                <button
                    onClick={e => {
                        return handleItemsDisplay(e, "manageItems");
                    }}
                >
                    manage items
                </button>
                <button
                    onClick={e => {
                        return handleItemsDisplay(e, "addItems");
                    }}
                >
                    add items
                </button>
                {addItems ? (
                    <ProductList
                        products={products}
                        handleAddingItems={handleAddingItems}
                    />
                ) : (
                    <RegistryItemList
                        handleRemoveItems={handleRemoveItems}
                        registryItems={registryItems}
                        eventId={eventId}
                        fetchRegistryItem={fetchRegistryItem}
                    />
                )}
            </div>
        );
    }
}

export default Registry;
