const request = require('supertest');

const app = require('../../src/app');

test('GET /healthcheck', async () => {
  const res = await request(app).get('/healthcheck');

  expect(res.status).toBe(200);
  expect(res.body).toBe('alive!');
});
