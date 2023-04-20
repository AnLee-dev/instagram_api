const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// articleDetailController

router.get('/my-article', meController.storedArticle);

module.exports = router;