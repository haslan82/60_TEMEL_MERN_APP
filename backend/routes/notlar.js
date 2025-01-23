


const express = require('express');

const { notOlustur, notlarGetir, notGetir } = require('../controllers/notController');



const router = express.Router();


router.get("/",notlarGetir)
//? Listele
router.get("/:id",notGetir)

//? Ekle

router.post("/",notOlustur)



//? Sil
router.delete("/:id",(req,res) => {
    res.json({message:`${req.params.id} idli notu sil`})
    
})


//? Güncelle
router.patch("/:id",(req,res) => {
    res.json({message:`${req.params.id} idli notu güncelle`})
})






module.exports = router