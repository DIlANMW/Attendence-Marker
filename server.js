const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const ResultRouts = require("./routes/AllRoutes");

app.use(cors());

app.use(express.json());

app.use("/", ResultRouts);

const PORT = "5000";
const DB_URL =
  "mongodb+srv://dilan:8763@cluster0.1kk2p.mongodb.net/attendence?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB coonection error", err));

// port listing

app.listen(PORT, () => {
  console.log(`Listing on port${PORT}`);
});
