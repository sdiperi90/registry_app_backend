// ----------------------------------------
//  ************ PRESENT ROUTES **************
// ----------------------------------------

const { Present, Product, Event } = require("../models/models");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

module.exports = app => {
    app.get("/api/presents/:event_id", async (req, res) => {
        console.log("I got my event_id", req)
        try {

            let userEvent = await Event.findById(req.params.event_id).populate({
                path: 'present',
                populate: {
                    path: "product"
                }
            });
            console.log("test", userEvent)
            res.json(userEvent.present);
        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }
    });

    app.post("/api/presents", async (req, res) => {
        console.log(req.body)
        try {
            let present = await Present.create({ purchased: false, favorites: false });
            let event = await Event.findById(req.body.event_id)
            let product = await Product.findById(req.body.product_id)
            present.product = product
            event.present.push(present)
            Promise.all([present.save(), event.save()])
            let userPresents = await Event.findById(req.body.event_id).populate({
                path: "present",
                populate: {
                    path: 'product'
                }
            })
            console.log(userPresents.present)
            res.json(userPresents.present);
        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }
    });

    app.delete("/api/presents/:present_id", async (req, res) => {
        console.log("delete", req.params)
        try {
            await Present.findByIdAndRemove(req.params.present_id, () => {
            })

            res.json(true);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    });
};
