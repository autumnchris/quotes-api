const Quote = require('../models/quote');

exports.fetchQuotes = (req, res, next) => {
  Quote.find().sort({
    source: 'asc'
  }).then(data => {
    res.json(data);
  }).catch(error => {
    res.send(error);
  });
}
