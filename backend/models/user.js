const mongoose = require("../database/dbconnect")

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    pwd:{
        type: String,
        required: true
    }
}, {timestamps: true})
const User = mongoose.model('Userone', userSchema);

module.exports = User