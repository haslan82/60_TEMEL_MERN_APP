


const express = require('express');

const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController');



const router = express.Router();


router.get("/",notlarGetir)
//? Listele
router.get("/:id",notGetir)

//? Ekle

router.post("/",notOlustur)



//? Sil
router.delete("/:id",notSil)


//? Güncelle
router.patch("/:id",notGuncelle)






module.exports = router