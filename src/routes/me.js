const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/my-post', meController.storedPost);

module.exports = router;