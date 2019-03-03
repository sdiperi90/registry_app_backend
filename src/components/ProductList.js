import React, { Component } from "react";
import Product from "../components/Product";

class ProductList extends Component {
    render() {
        let { products } = this.props;
        console.log(products);
        return (
            <div className="productlist-container">
                {products.map(product => {
                    return <Product product={product} />;
                })}
            </div>
        );
    }
}

export default ProductList;
