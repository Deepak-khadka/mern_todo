import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import TodoRoute from "./todo/router.js";
dotenv.config();

const app = express();

// request body data into json format
app.use(express.json());

// Connection to MongoDB
try {
  mongoose.connect("mongodb://localhost: /kathford", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  console.log(err);
}

// Route List for TODO
app.use("/todo", TodoRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
