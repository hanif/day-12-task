const DefaultCtl = require('../../../src/controllers/default');

test('Error action shoul call next with Error object passed as the first argument', () => {
  const next = jest.fn();
  DefaultCtl.error({}, {}, next);

  expect(next.mock.calls.length).toBe(1);
  expect(next.mock.calls[0][0] instanceof Error).toBeTruthy();
});
