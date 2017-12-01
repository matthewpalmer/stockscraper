var expect = require('expect.js');
var stockscraper = require('../index');

// These are snipped but work fine for a test
var sampleResponse = `
// [
{
"symbol" : "AAPL",
"exchange" : "NASDAQ",
"id": "22144",
"t" : "AAPL",
"e" : "NASDAQ",
"name" : "Apple Inc."
, "f_reuters_url" : "http:\u002F\u002Fstocks.us.reuters.com\u002Fstocks\u002Fratios.asp?rpc=66\u0026symbol=AAPL.O",
"f_recent_quarter_date" : "Q3 (Sep \u002717)",
"f_annual_date" : "2017",
"f_ttm_date" : "2016",
"c" : "-1.88",
"l" : "169.97",
"cp" : "-1.09",
"ccol" : "chr",
"op" : "169.95",
"hi" : "171.67",
"lo" : "168.50",
"vo" : "22.81M",
"avvo" : "29.01M",
"hi52" : "176.24",
"lo52" : "108.25",
"mc" : "872.68B",
"pe" : "18.50",
"fwpe" : "",
"beta" : "1.25",
"eps" : "9.19",
"dy" : "1.48",
"ldiv" : "0.63",
"shares" : "5.13B",
"instown" : "62%",
"eo":""
, "sid" : "us-TRBC:57",
"sname" : "Technology",
"iid" : "us-TRBC:5710601010",
"iname" : "Computer Hardware - NEC"
}]
`;

var desiredResponse = {
"symbol" : "AAPL",
"exchange" : "NASDAQ",
"id": "22144",
"t" : "AAPL",
"e" : "NASDAQ",
"name" : "Apple Inc."
, "f_reuters_url" : "http:\u002F\u002Fstocks.us.reuters.com\u002Fstocks\u002Fratios.asp?rpc=66\u0026symbol=AAPL.O",
"f_recent_quarter_date" : "Q3 (Sep \u002717)",
"f_annual_date" : "2017",
"f_ttm_date" : "2016",
"c" : "-1.88",
"l" : "169.97",
"cp" : "-1.09",
"ccol" : "chr",
"op" : "169.95",
"hi" : "171.67",
"lo" : "168.50",
"vo" : "22.81M",
"avvo" : "29.01M",
"hi52" : "176.24",
"lo52" : "108.25",
"mc" : "872.68B",
"pe" : "18.50",
"fwpe" : "",
"beta" : "1.25",
"eps" : "9.19",
"dy" : "1.48",
"ldiv" : "0.63",
"shares" : "5.13B",
"instown" : "62%",
"eo":""
, "sid" : "us-TRBC:57",
"sname" : "Technology",
"iid" : "us-TRBC:5710601010",
"iname" : "Computer Hardware - NEC"
};

describe('Index', function() {
  it('should clean up a sample response from google', function(done) {
    stockscraper.clean(sampleResponse, function(err, res) {
      expect(res).to.eql(desiredResponse);
      expect(err).to.not.be.ok();
      done();
    });
  });
});