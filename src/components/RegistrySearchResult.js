import React, { Component } from "react";
import Product from "../components/Product";

class RegistrySearchResult extends Component {
    componentDidMount() {
        this.props.fetchRegistryItem();
    }
    render() {
        let { registryItems, registryType } = this.props;
        console.log(registryType);
        let registryTypeClass = `${registryType.split(" ")[0]}-background`;
        return (
            <div className="productlist-container">
                <div
                    className={`registry-img-container ${
                        registryType ? registryTypeClass : ""
                    }`}
                />
                {registryItems.length > 0 ? (
                    registryItems.map(product => {
                        return (
                            <Product
                                key={product.product_id}
                                product={product}
                                buttonText={"Add To Cart"}
                                // handleChangeItems={handleRemoveItems}
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

export default RegistrySearchResult;
