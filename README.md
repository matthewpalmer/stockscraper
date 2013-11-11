A wrapper for scraping Google's stock data.

Requires request

    npm install stockscraper

##Docs

    stockscraper.scrape(MARKET, TICKER, CALLBACK)

Response:

    {
      id: '22144',
      t: 'AAPL',
      e: 'NASDAQ',
      l: '520.22',
      l_fix: '520.22',
      l_cur: '520.22',
      s: '0',
      ltt: '3:46PM EST',
      lt: 'Nov 11, 3:46PM EST',
      c: '-0.34',
      cp: '-0.07',
      ccol: 'chr'
    };

##Example
```js
var stockscraper = require('stockscraper');
stockscraper.scrape('NASDAQ', 'AAPL', function(err, data) {
  console.log(data);
});
```