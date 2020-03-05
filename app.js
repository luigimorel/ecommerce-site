const express = require("express");
const mongoose = require("mongoose");
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
//Routes middlewar e
app.use("/api", userRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Port is running on port ${port}`);
});
