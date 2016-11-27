"use strict"

const litQuotes = require('./quotes/literature');
const rapQuotes = require('./quotes/literature');
const histQuotes = require('./quotes/literature');
const genQuotes = require('./quotes/literature');

function logQuote(quotes, port) {
  port = typeof port !== 'undefined' ? port : null;
  const randomPosition = Math.floor( quotes.length * Math.random() );
  console.log(quotes[randomPosition]);
  if (port !== null) {
    console.log('(running on port: ' + port + ')');
  }
}

module.exports = {
  any: () => {
    const allQuotes = litQuotes + rapQuotes + histQuotes + genQuotes;
    logQuote(allQuotes)
  },

  rap: () => {
    logQuote(rapQuotes);
  },

  lit: () => {
    logQuote(litQuotes);
  },

  hist: () => {
    logQuote(histQuotes);
  },

  general: () => {
    logQuote(genQuotes);
  }
}

