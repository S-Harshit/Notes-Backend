const { urlencoded } = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;

const app = express();
connectDB();
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/', require('./routes/notesRoutes'));
app.use(errorHandler);
app.listen(port);
