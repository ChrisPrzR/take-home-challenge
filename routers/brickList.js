const express = require('express');

const { listBricks } = require('../controllers/list');

const router = express.Router();

router.get('/list', listBricks);

module.exports = router