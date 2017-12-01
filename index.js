var request = require('request');

function get(market, ticker, callback) {
  if (!ticker || !market) {
    throw new Error('invalid args');
  } else {
    var baseStr = 'https://finance.google.com/finance?output=json&q=';
    baseStr = baseStr.concat(market,':', ticker);

    request(baseStr, function(err, res, body) {
      if (err || res.statusCode !== 200) {
        console.log(res.statusCode);
        callback(new Error('Invalid request'))
      } else {
        callback(err, body);
      }
    });
  }
}

function clean(data, callback) {
  // Strip leading '//' off data
  var json = data.replace(/^\s*\/\//, '');
  // data is returned as a 1-element array
  var jsonBody = JSON.parse(json)[0];
  if(jsonBody == null) {
    callback(new Error('Not Found'));
  } else {
    callback(null, jsonBody);
  }
}

function scrape(market, ticker, callback) {
  get(market, ticker, function(err, data) {
    if (err) return callback(err);
    clean(data, callback);
  });
}

module.exports = {
  get: get,
  clean: clean,
  scrape: scrape
};
