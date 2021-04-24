require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRouter.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running in port", port);
});

// Connect mongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(
  URI,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB is connected");
  }
);
