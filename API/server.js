const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Connect to MongoDB database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Connected to database"));

// Use express JSON middleware
app.use(express.json());

// Set up routes
const todosRouter = require("./routes/todos");
app.use("/todos", todosRouter);

app.listen(5000, () => console.log("Now listening..."));
