import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'


//configure env
dotenv.config();

//database config

connectDB();

// rest object
const app = express();

//middleware 
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth', authRoutes);


// rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
// const PORT = 8080 instead of this line now we will use dotenv
const PORT = process.env.PORT || 8080 ;

// run or listen
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
})