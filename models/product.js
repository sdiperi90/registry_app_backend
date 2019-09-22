const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    // product_id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    product_name: String,
    product_description: String,
    img: String,
    price: String,
    link: String,

})


module.exports = mongoose.model("product", ProductSchema)



// const Product = db.define("product", {
//     product_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     product_name: Sequelize.STRING,
//     product_description: Sequelize.STRING,
//     img: Sequelize.STRING,
//     price: Sequelize.STRING,
//     link: Sequelize.STRING
// });
