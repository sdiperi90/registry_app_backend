const Sequelize = require("sequelize");

const db = new Sequelize({
    database: "registry_db",
    dialect: "postgres",
    define: {
        underscored: true
    }
});

const User = db.define("user", {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    username: Sequelize.STRING
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

User.hasMany(Event, { foreignKey: "user_id" });
Event.belongsTo(User, { foreignKey: "user_id" });

const Present = db.define("present", {
    present_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchased: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    favorites: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

Event.hasMany(Present, { foreignKey: "event_id" });
Present.belongsTo(Event, { foreignKey: "event_id" });

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

Product.hasMany(Present, { foreignKey: "product_id" });
Present.belongsTo(Product, { foreignKey: "product_id" });

db.sync();

module.exports = {
    db,
    User,
    Present,
    Event,
    Product
};
