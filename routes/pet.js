const express = require('express');
const petController = require("../controller/petController");

const router = express.Router();

router.get('/', petController.index );
router.get('/add/:nome', petController.add);
router.get('/buscar/:nome', petController.buscar);

module.exports = router;