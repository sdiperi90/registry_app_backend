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
            fetchRegistryItem
        } = this.props;
        return (
            <div className="productlist-container">
                {registryItems.map(product => {
                    return (
                        <Product
                            key={product.product_id}
                            product={product}
                            buttonText={"Remove Item"}
                            handleChangeItems={handleRemoveItems}
                        />
                    );
                })}
            </div>
        );
    }
}

export default RegistryItemList;
