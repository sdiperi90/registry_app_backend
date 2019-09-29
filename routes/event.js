// ----------------------------------------
//  ************ EVENT ROUTES **************
// ----------------------------------------

const { Event } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/event/:id", async (req, res) => {
        try {
            let id = req.params.id;

            let events = await Event.find({});
            res.json(events);
        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post("/api/event", async (req, res) => {
        try {

            let event = await Event.create(req.body);
            res.status(200).json(event._id);
            return;
        } catch (error) {
            res.json({
                message: error.message
            });
            return;
        }
    });
};
