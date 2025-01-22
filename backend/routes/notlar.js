


const express = require('express');




const router = express.Router();


router.get("/",(req,res) => {
    res.json({message:"Bütün Notlar"})
})
//? Listele
router.get("/:id",(req,res) => {
    res.json({message:`${req.params.id} idli notu getir`})
})

//? Ekle
router.post("/",(req,res) => {
    res.json({message:"Yeni Not Ekle"})
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