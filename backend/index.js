const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const CategoryRouter = require("./routes/category");
const ColorRouter = require("./routes/color");
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/category", CategoryRouter);
app.use("/color", ColorRouter);
mongoose
.connect("mongodb://127.0.0.1:27017", { dbName: "ishop" })
  .then(() => {
    console.log(" dbConnexted");
    app.listen(PORT, () => {
      console.log("Server connected");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the server:", error.message);
  });
