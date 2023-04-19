const express = require('express');
const router = express.Router();

const ArticleController = require('../app/controllers/ArticlesController');

// articleDetailController

router.get('/create', ArticleController.create);
router.post('/store', ArticleController.store);
router.get('/:slug', ArticleController.show);
module.exports = router;