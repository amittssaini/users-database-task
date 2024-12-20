const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express();
const userRouter = require('./Routes/user.route')

//DB_URI =mongodb+srv://admin:pa66word@cluster0.7ugfj.mongodb.net/user-db?retryWrites=true&w=majority&appName=Cluster0


const PORT = process.env.PORT;
const db_uri = process.env.DB_URI
mongoose
.connect(db_uri)
.then(()=>{
    console.log(`DB IS CONNECTED`)
    
})
.catch((error)=>console.log('DB IS NOT CONNECTED'))

app.listen(PORT,()=>console.log(`Server is Connected at the port ${PORT}`))

// const corsOptions = {
//     origin: 'https://aquamarine-kheer-052bd9.netlify.app/', 
//     methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Specify the allowed methods
//     Credential:true,

//   };
  
  // Use the CORS middleware with the options
  app.use(cors());

app.use(express.json());
app.use('/users',userRouter);