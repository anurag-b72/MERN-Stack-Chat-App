const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to access JSON data

app.get("/", (req, res) => {
  res.send("API is Running Successfully!");
});

app.use("/api/user", userRoutes);

app.use(notFound); // for handing errors found if above code throws an error
app.use(errorHandler); // for handing miscellaneous errors found if above error is also not handled

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));
