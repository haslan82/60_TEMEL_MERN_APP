const express = require('express');
const app = express();
require('dotenv').config()


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} portunda çalışıyor`);
})


app.get('/', (req, res) => {
    res.json({message:"Merhaba Temel Mern App"})
})