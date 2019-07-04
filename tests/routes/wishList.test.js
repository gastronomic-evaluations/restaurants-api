const request = require('supertest');

const app = require('../../src/app');

describe('Wish List', () => {
  test('GET /api/wishlist', async () => {
    const res = await request(app).get('/api/wishlist');

    expect(res.status).toBe(200);
  });

  test('POST /api/wishlist', async () => {
    const res = await request(app).post('/api/wishlist')
      .send({ name: 'Restaurant Name' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('name', 'Restaurant Name');
  });

  test('DELETE /api/wishlist/:id', async () => {
    const res = await request(app).delete('/api/wishlist/5d1e093bd23b3c0129a42f68');

    expect(res.status).toBe(204);
  });
});
