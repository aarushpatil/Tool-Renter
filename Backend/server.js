require("dotenv").config();
const toolRoutes = require("./routes/toolRoutes");
const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();


//middleware
//attaches body to reqest object in the routes
app.use(express.json());

//log requests
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
});

//routes
app.use("/api/tool-data", toolRoutes);



//mongoose
const toolData = require("./models/tool-data.js");

//connection to mongodb
mongoose
  .connect(process.env.MONG_URI)
  .then((result) => {
    //make app listen for requests
    console.log("connected to db and listening on port " + process.env.PORT);
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));

process.env;
