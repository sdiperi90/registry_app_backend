// ----------------------------------------
//  ************ EVENT ROUTES **************
// ----------------------------------------

const { Event } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/event", async (req, res) => {
        try {
            res.send("Hello");
            console.log("working");
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post("/api/event", async (req, res) => {
        try {
            console.log("working", req.body);
            await Event.create(req.body);
            res.send(true);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    });
};
