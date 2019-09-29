// ----------------------------------------
//  ************ Product ROUTES **************
// ----------------------------------------

const { Product } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/products", async (req, res) => {
        try {
            let products = await Product.find({});
            res.json(products);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    });
};
