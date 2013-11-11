var expect = require('expect.js');
var stockscraper = require('../index');

var sampleResponse = '// [ { "id": "22144" ,"t" : "AAPL" ,"e" : "NASDAQ" ,"l" : "520.22" ,"l_fix" : "520.22" ,"l_cur" : "520.22" ,"s": "0" ,"ltt":"3:46PM EST" ,"lt" : "Nov 11, 3:46PM EST" ,"c" : "-0.34" ,"cp" : "-0.07" ,"ccol" : "chr" } ]';
var desiredResponse = { id: '22144',
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
  ccol: 'chr' };

describe('Index', function() {
  it('should clean up a sample response from google', function(done) {
    stockscraper.clean(sampleResponse, function(err, res) {
      expect(res).to.eql(desiredResponse);
      expect(err).to.not.be.ok();
      done();
    });
  });
});