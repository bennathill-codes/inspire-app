const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

// middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", require("./routes/authRoutes"));

// server connection
const port = 8000;
app.listen(port, () => console.log(`Server is running on ${port}...`));
