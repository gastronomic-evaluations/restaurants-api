const request = require('supertest');

const app = require('../../src/app');
const Restaurants = require('../../src/models/restaurants');
const { restaurant: restaurantFixture } = require('./../fixtures/fixtures');

describe('Restaurants', () => {
  beforeAll(async (done) => {
    await Restaurants.collection.deleteMany({});
    done();
  });

  afterAll(async (done) => {
    await Restaurants.collection.deleteMany({});
    done();
  });

  test('GET /api/restaurants', async () => {
    const res = await request(app).get('/api/restaurants');

    expect(res.status).toBe(200);
  });

  test('POST /api/restaurants', async () => {
    const res = await request(app).post('/api/restaurants')
      .send(restaurantFixture);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('title', 'Outback');

    expect(res.body).toHaveProperty('ratings');
    expect(res.body.ratings).toHaveProperty('service', 5);

    expect(res.body).toHaveProperty('recomendations');
    expect(res.body.recomendations).toHaveProperty('worth', true);

    expect(res.body).toHaveProperty('convenience');
    expect(res.body.convenience).toHaveProperty('wifi', true);
  });

  test('GET /api/restaurants/:id', async () => {
    const { _id } = await Restaurants.findOne().exec();
    const res = await request(app).get(`/api/restaurants/${_id}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('title', 'Outback');
  });

  test('PUT /api/restaurants/:id', async () => {
    const { _id } = await Restaurants.findOne().exec();
    const res = await request(app).put(`/api/restaurants/${_id}`)
      .send({ title: 'Madero' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('title', 'Madero');
  });

  test('DELETE /api/restaurants/:id', async () => {
    const { _id } = await Restaurants.findOne().exec();
    const res = await request(app).delete(`/api/restaurants/${_id}`);

    expect(res.status).toBe(204);
  });
});
