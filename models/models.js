
const Event = require("./event")
const User = require("./user")
const Present = require("./present")
const Product = require("./product")




// const Sequelize = require("sequelize");
// const dbName = "registry_db";
// let db;


// if (process.env.DATABASE_URL) {
//     db = new Sequelize(process.env.DATABASE_URL, {
//         dialect: 'postgres',
//         protocol: 'postgres',
//         host: process.env.DATABASE_URL,
//         logging: true, //false
//         define: {
//             underscored: true
//         }
//     })
// } else {
//     db = new Sequelize({
//         database: dbName,
//         dialect: "postgres",
//         define: {
//             underscored: true
//         }
//     });
// }
// const User = db.define("user", {
//     user_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     googleId: Sequelize.STRING,
//     first_name: Sequelize.STRING,
//     last_name: Sequelize.STRING,
//     email: Sequelize.STRING
// });

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

// User.hasMany(Event, { foreignKey: "user_id" });
// Event.belongsTo(User, { foreignKey: "user_id" });

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

// Event.hasMany(Present, { foreignKey: "event_id" });
// Present.belongsTo(Event, { foreignKey: "event_id" });

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

// Product.hasMany(Present, { foreignKey: "product_id" });
// Present.belongsTo(Product, { foreignKey: "product_id" });

// db.sync();

module.exports = {

    User,
    Present,
    Event,
    Product
};
