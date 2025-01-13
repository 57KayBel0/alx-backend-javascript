const request = require('request');
const assert = require('assert');
const getPaymentTokenFromAPI = require('./lib/6-payment_token');
const utils = require('./lib/utils');

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

describe('Cart page', function() {
  it('Tests output of GET /cart/:id', function(done) {
    request.get('http://localhost:7865/cart/1', function(error, response, body) {
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

  it('Tests output of GET /cart/:id with id hello', function(done) {
    request.get('http://localhost:7865/cart/hello', function(error, response, body) {
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

describe('Available payments', function() {
  it('Tests output of GET /available_payments', function(done) {
    request.get('http://localhost:7865/available_payments', function(error, response, body) {
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

describe('Login', function() {
  it('Tests output of POST /login', function(done) {
    request.post('http://localhost:7865/login', { form: { username: 'user', password: 'pass' } }, function(error, response, body) {
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

