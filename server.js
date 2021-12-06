const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./configs/db')

// Importing routes
const userRoutes = require('./routes/user.routes')


dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());

// Using routes
app.use('/api/users', userRoutes);




const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`app is runnig in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.italic))