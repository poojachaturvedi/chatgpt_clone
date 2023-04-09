const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const color=require('colors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
///routes path
const authRoutes=require('./routes/authRoute');
const errorHandler = require('./middlewares/errorMiddleware');


dotenv.config()
//mongo connection

connectDB();
//rest object
const app=express();
//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler);

const PORT=process.env.PORT || 8080;

//routes
//API ROUTES
app.use('api/v1/auth',authRoutes);


app.listen(8080,()=>{
    console.log(`server running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
    );
});
