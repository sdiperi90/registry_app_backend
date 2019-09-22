const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PresentSchema = new Schema({
    // present_id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    purchased: Boolean,
    favorites: Boolean,
    product: [{
        type: Schema.Types.ObjectId,
        ref: "product"
    }]
})

module.exports = mongoose.model("present", PresentSchema)






// const Present = db.define("present", {
//     present_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     purchased: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: false
//     },
//     favorites: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: false
//     }
// });