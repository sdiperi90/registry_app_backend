// ----------------------------------------
//  ************ PRESENT ROUTES **************
// ----------------------------------------

const { Present, Product } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/presents/:id", async (req, res) => {
        try {
            let registryItems = await Present.findAll({
                where: {
                    event_id: req.params.id
                    // product_id: req.event_id
                },
                include: [Product],
                raw: true
            });
            console.log(registryItems);
            res.json(registryItems);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post("/api/presents", async (req, res) => {
        try {
            console.log("working", req.body);
            await Present.create(req.body);
            res.json(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });
};
