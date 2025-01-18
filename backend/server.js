const express = require('express');

require('dotenv').config()



const app=express();

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    //!console.log(`${req.method} ${req.url}`);
    next();
})

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} portunda çalışıyor`);
})


app.get('/', (req, res) => {
    res.json({message:"Merhaba Temel Mern App"})
})