import React, { Component } from "react";

class Product extends Component {
    render() {
        let { product, handleChangeItems, buttonText } = this.props;

        return (
            <div className="product-container">
                <div>{product.img &&
                    <img
                        src={require(`../images/baby-shower/${product.img}`)}
                    />
                }
                </div>
                <div className="product-detail">
                    <h3>{product.price}</h3>
                    <h4>{`${product.product_name}`}</h4>

                    <p>{`${product.product_description}`}</p>
                    <div className="add-to-registry">
                        <div>
                            <img src={require("../images/gift-trans.png")} />
                        </div>

                        <button
                            onClick={e => {
                                handleChangeItems(product);
                            }}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
