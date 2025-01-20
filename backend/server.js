const express = require('express');

require('dotenv').config()


const notRoute = require('./routes/notlar')



const app=express();

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    //!console.log(`${req.method} ${req.url}`);
    next();
})
app.use(express.json())
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} portunda çalışıyor`);
})


app.use(notRoute)