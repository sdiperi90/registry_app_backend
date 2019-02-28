const Sequelize = require("sequelize");

const db = new Sequelize({
    database: "registry_db",
    dialect: "postgres",
    define: {
        underscored: true
    }
});

const User = db.define("user", {
    registry_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    username: Sequelize.STRING
});

const Present = db.define("present", {
    gift_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: Sequelize.INTEGER,
    purchased: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    favorites: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    event_id: Sequelize.INTEGER
});

const Event = db.define("event", {
    event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    type: Sequelize.STRING,
    date: Sequelize.STRING,
    host_1: Sequelize.STRING,
    host_2: Sequelize.STRING
});

const Product = db.define("product", {
    product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: Sequelize.STRING,
    img: Sequelize.STRING,
    price: Sequelize.STRING,
    link: Sequelize.STRING
});

db.sync();

module.exports = {
    db,
    User,
    Present,
    Event,
    Product
};
