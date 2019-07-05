const request = require('supertest');
const WishList = require('../../src/models/wishList');

const app = require('../../src/app');
const { wishList: wishlistFixture } = require('./../fixtures/fixtures');

describe('Wish List', () => {
  beforeAll(async (done) => {
    await WishList.collection.deleteMany({});
    done();
  });

  afterAll(async (done) => {
    await WishList.collection.deleteMany({});
    done();
  });

  test('GET /api/wishlist', async () => {
    const res = await request(app).get('/api/wishlist');

    expect(res.status).toBe(200);
  });

  test('POST /api/wishlist', async () => {
    const res = await request(app).post('/api/wishlist')
      .send(wishlistFixture);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('name', 'Restaurant Name');
  });

  test('GET /api/wishlist/:id', async () => {
    const { _id } = await WishList.findOne().exec();
    const res = await request(app).get(`/api/wishlist/${_id}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'Restaurant Name');
  });

  test('PUT /api/wishlist/:id', async () => {
    const { _id } = await WishList.findOne().exec();
    const res = await request(app).put(`/api/wishlist/${_id}`)
      .send({ name: 'Restaurant new name' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('nModified', 1);
  });

  test('DELETE /api/wishlist/:id', async () => {
    const { _id } = await WishList.findOne().exec();
    const res = await request(app).delete(`/api/wishlist/${_id}`);

    expect(res.status).toBe(204);
  });
});
