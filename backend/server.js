const express = require('express');
const mongoose = require('mongoose');



require('dotenv').config()


const notRoute = require('./routes/notlar')



const app=express();

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    //!console.log(`${req.method} ${req.url}`);
    next();
})
app.use(express.json())
/* app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} portunda çalışıyor`);
}) */


    


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb bağlandı");
    app.listen(process.env.PORT, () => {
        console.log(`${process.env.PORT} portunda çalışıyor`);
    })
})
.catch((err)=>{
    console.log(err);
})





app.use("/api/notlar",notRoute)