const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongoose } = require("mongoose");

dotenv.config();

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

const app = express();

app.use("/", require("./routes/authRoutes"));
app.use(cors());

const port = 8000;

app.listen(port, () => console.log(`Server is running on ${port}...`));
