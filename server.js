const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");

const accounts = require("./routes/accounts");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}

// Mount routes
app.use("/api/v1/accounts", accounts);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
