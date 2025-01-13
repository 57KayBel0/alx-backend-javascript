const request = require('request');
const assert = require('assert');

describe('Index page', function() {
  it('Tests output of GET / request', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      if (error) {
        console.error('Request error:', error);
        return done(error);
      }
      if (!response) {
        console.error('No response received');
        return done(new Error('No response received'));
      }
      console.log('Response status code:', response.statusCode);
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
});

