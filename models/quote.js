const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  quote: {
    type: String,
    required: [true, 'The quote must be included.']
  },
  source: {
    type: String,
    required: [true, 'The source of the quote must be included.']
  }
},
{
  strictQuery: true
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
