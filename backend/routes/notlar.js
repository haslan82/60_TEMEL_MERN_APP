


const express = require('express');
const notModel = require('../models/notModel');



const router = express.Router();


router.get("/",(req,res) => {
    res.json({message:"Bütün Notlar"})
})
//? Listele
router.get("/:id",(req,res) => {
    res.json({message:`${req.params.id} idli notu getir`})
})

//? Ekle
router.post("/",async(req,res) => {
    //res.json({message:"Yeni Not Ekler misin?"})
    const{baslik,aciklama}=req.body
    try {
        const not =await notModel.create({baslik,aciklama})
        res.status(200).json(not)
    } catch (error) {
        res.status(400).json({hata:error.message})
    }
})

//? Sil
router.delete("/:id",(req,res) => {
    res.json({message:`${req.params.id} idli notu sil`})
    
})


//? Güncelle
router.patch("/:id",(req,res) => {
    res.json({message:`${req.params.id} idli notu güncelle`})
})


module.exports = router