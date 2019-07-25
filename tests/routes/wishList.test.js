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

  describe('GET /restaurants/api/wishlist', () => {
    test('get a wishlist with success', async () => {
      const res = await request(app).get('/restaurants/api/wishlist');

      expect(res.status).toBe(200);
    });
  });

  describe('POST /restaurants/api/wishlist', () => {
    test('create a wish with success', async () => {
      const res = await request(app).post('/restaurants/api/wishlist')
        .send(wishlistFixture);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('name', 'Restaurant Name');
    });

    test('shouldn`t create a wish without name', async () => {
      const res = await request(app).post('/restaurants/api/wishlist')
        .send({});

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('name', 'O nome é um campo obrigatório.');
    });

    test('shouldn`t create a wish with invalid name', async () => {
      const res = await request(app).post('/restaurants/api/wishlist')
        .send({ name: null });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('name', 'O nome é um campo obrigatório.');
    });
  });

  describe('GET /restaurants/api/wishlist/:id', () => {
    test('should get a wish by id with success', async () => {
      const { _id } = await WishList.findOne().exec();
      const res = await request(app).get(`/restaurants/api/wishlist/${_id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', 'Restaurant Name');
    });
  });

  describe('PUT /restaurants/api/wishlist/:id', () => {
    test('should modify a wish with success', async () => {
      const { _id } = await WishList.findOne().exec();
      const res = await request(app).put(`/restaurants/api/wishlist/${_id}`)
        .send({ name: 'Restaurant new name' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', 'Restaurant new name');
    });

    test('shouldn`t modify a wish if then have no name', async () => {
      const { _id } = await WishList.findOne().exec();
      const res = await request(app).put(`/restaurants/api/wishlist/${_id}`)
        .send({ name: '' });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('name', 'O nome é um campo obrigatório.');
    });
  });

  describe('DELETE /restaurants/api/wishlist/:id', () => {
    test('should delete a wish with success', async () => {
      const { _id } = await WishList.findOne().exec();
      const res = await request(app).delete(`/restaurants/api/wishlist/${_id}`);

      expect(res.status).toBe(204);
    });
  });
});
