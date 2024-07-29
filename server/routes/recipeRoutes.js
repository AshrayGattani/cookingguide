const express = require('express');
const router = express.Router();

const recipecontroller = require('../controllers/recipeController');

// app routes

router.get('/', recipecontroller.homepage);





module.exports = router;