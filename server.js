// Modules/libraries
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;
const DEV_MODE = process.env.DEV_MODE;

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// route setup
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/consultant", require("./routes/consultantRoutes"));


app.listen(PORT, () => {
    console.log(`Server is running in ${DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})