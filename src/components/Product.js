import React, { Component } from "react";

class Product extends Component {
    render() {
        // ../images/baby-shower/crib.jpeg
        let { product } = this.props;
        console.log(product.img);
        return (
            <div className="product-container">
                <div>
                    <img
                        src={require(`../images/baby-shower/${product.img}`)}
                    />
                </div>
                <div className="product-detail">
                    <h3>{product.price}</h3>
                    <h4>{`${product.product_name}`}</h4>

                    <p>{`${product.product_description}`}</p>
                    <div className="add-to-registry">
                        <div>
                            <img src={require("../images/gift-trans.png")} />
                        </div>
                        <button>add to registry</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
