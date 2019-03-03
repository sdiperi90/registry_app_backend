import React from "react";
import Product from "../components/Product";

const RegistryItemList = ({ registryItems, handleRemoveItems }) => {
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
};

export default RegistryItemList;
