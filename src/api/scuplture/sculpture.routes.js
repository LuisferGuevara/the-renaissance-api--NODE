const express = require('express');
const Sculpture = require('./sculpture.model');
const router = express.Router();
require('dotenv').config()

router.get('/', async (req, res,) =>{
    try {
        const allSculptures = await Sculpture.find().lean();
        return res.status(200).json(allSculptures);
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;