// ----------------------------------------
//  ************ PRESENT ROUTES **************
// ----------------------------------------

const { Present } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/presents", async (req, res) => {
        try {
            res.json("Hello");
            console.log("working");
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
