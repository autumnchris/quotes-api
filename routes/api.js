const express = require('express');
const quoteController = require('../controllers/quote-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/quotes', quoteController.fetchQuotes);

module.exports = router;
