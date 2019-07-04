const request = require('supertest');

const app = require('../../src/app');

describe('Restaurants', () => {
  test('GET /api/restaurants', async () => {
    const res = await request(app).get('/api/restaurants');

    expect(res.status).toBe(200);
  });
});
