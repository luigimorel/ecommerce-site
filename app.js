const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

//User routes
const userRoutes = require("./routes/user");
//App
const app = express();

//Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database has been connected ");
  });

//Middelware for the morgan package that will be used fir the routing
app.use(morgan("dev"));

//Middleware fpr the body parser package that will be used to get the parsed data from the parsed data
app.use(bodyParser.json());
//Routes middlewar e
app.use("/api", userRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Port is running on port ${port}`);
});
