const mongoose = require("mongoose");
const Schema = mongoose.Schema


const UserSchema = new Schema({
    googleId: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },

    event: [{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }],

})

const User = mongoose.model("user", UserSchema);

module.exports = User