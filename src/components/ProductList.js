import React, { Component } from "react";
import Product from "../components/Product";

class ProductList extends Component {
    render() {
        let { products, handleAddingItems } = this.props;
        return (
            <div className="productlist-container">
                {products.map(product => {
                    return (
                        <Product
                            key={product.product_id}
                            product={product}
                            buttonText={"Add Item"}
                            handleChangeItems={handleAddingItems}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ProductList;
