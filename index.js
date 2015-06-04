var request = require('request');

function get(market, ticker, callback) {
  if (!ticker || !market) {
    throw new Error('invalid args');
  } else {
    var baseStr = 'https://www.google.com/finance/info?&q=';
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
  var string = data.replace('[','');
  string = string.replace(']','');
  string = string.replace('//','');
  var jsonBody = JSON.parse(string);
  callback(null, jsonBody);
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
