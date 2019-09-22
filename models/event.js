const mongoose = require('mongoose')
const Schema = mongoose.Schema


const EventSchema = new Schema({
    title: String,
    type: String,
    date: String,
    host_1: String,
    host_2: String,

    present: [{
        type: Schema.Types.ObjectId,
        ref: 'present'
    }]
})

module.exports = mongoose.model("event", EventSchema)


// const Event = db.define("event", {
//     event_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: Sequelize.STRING,
//     type: Sequelize.STRING,
//     date: Sequelize.STRING,
//     host_1: Sequelize.STRING,
//     host_2: Sequelize.STRING
// });