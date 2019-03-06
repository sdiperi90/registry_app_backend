import React, { Component } from "react";
import Product from "../components/Product";
import axios from "axios";

class RegistryItemList extends Component {
    componentDidMount() {
        this.props.fetchRegistryItem();
    }

    render() {
        let {
            registryItems,
            handleRemoveItems,
            eventId,
            fetchRegistryItem,
            handleModal
        } = this.props;
        return (
            <div className="productlist-container">
                {registryItems.length > 0 ? (
                    registryItems.map(product => {
                        return (
                            <Product
                                key={product.product_id}
                                product={product}
                                buttonText={"Remove Item"}
                                handleChangeItems={handleRemoveItems}
                            />
                        );
                    })
                ) : (
                    <p>Your have 0 items in registry</p>
                )}
            </div>
        );
    }
}

export default RegistryItemList;
