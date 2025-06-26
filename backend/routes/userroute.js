const express = require("express");
const RC= require("../controllers/registercontroller");
const LC= require("../controllers/logincontroller");

const route = express.Router();

route.get("/", (req, res) => {
    res.send("<h3>hello this is sourav</h3>")
})

route.post("/register",RC);
route.post("/login",LC);

module.exports = route