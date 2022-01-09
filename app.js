//Express dependencies.
const express = require("express");
const app = express();

//Dot Env setup
require("dotenv").config();
const process = require("process");

const { connectToDb } = require("./db/connect");

app.use(express.json());
app.use(express.static("./public"));

app.listen(5200, async () => {
  console.log("Server is up at 5200");
  try {
    await connectToDb(process.env.MONGO_DB_CONNECTION_STRING);
    console.log("Connection to Db established.");
    console.log("Server is up on 5200");
  } catch (e) {
    console.log("Failure Encountered, details below:");
    console.log(e);
  }
});
