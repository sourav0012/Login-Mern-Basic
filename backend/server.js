const express = require("express");
const userroute = require("./routes/userroute");
const cors = require("cors");

const app = express();
const port = 5000;


//configuration for api data post
app.use(express.json()); // to parse JSON data in request body
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded data

//cors configuration
app.use(cors());

// Importing routes
app.use("/ejob5", userroute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
