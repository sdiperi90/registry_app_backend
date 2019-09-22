const mongoose = require("mongoose");
const keys = require("../config/keys");
let db;

mongoose.Promise = global.Promise;


if (process.env.NODE_ENV === 'production') {
    db = mongoose.connect(`mongodb://${keys.mongoUserName}:${keys.mongoPassword}@ds151059.mlab.com:51059/registry`, { useNewUrlParser: true });
} else {
    db = mongoose.connect("mongodb://localhost/registry", { useNewUrlParser: true });
}


//  /users_test the name of database in mongo to connect

mongoose.connection.once('open', () => console.log("Successful")).on("error", (error) => {
    console.warn("Error", error)
})

module.exports = db;