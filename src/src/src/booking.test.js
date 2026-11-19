const test = require('node:test');
const assert = require('node:assert');
const { calculateDeposit } = require('./booking');

test('5 болон түүнээс цөөн хүнтэй үед урьдчилгаа 0 байна', () => {
  assert.strictEqual(calculateDeposit(4), 0);
  assert.strictEqual(calculateDeposit(5), 0);
});

test('5-аас дээш хүнтэй үед нэг хүний 10,000₮ урьдчилгаа тооцно', () => {
  assert.strictEqual(calculateDeposit(6), 60000);
});
