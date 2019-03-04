// ----------------------------------------
//  ************ Product ROUTES **************
// ----------------------------------------

const { Product } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/products", async (req, res) => {
        try {
            let products = await Product.findAll({ raw: true });
            console.log(products);
            res.json(products);
            console.log("working");
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });
};
