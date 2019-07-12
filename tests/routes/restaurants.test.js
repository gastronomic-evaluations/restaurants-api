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

  describe('GET /api/restaurants', () => {
    test('should list all restaurants with success', async () => {
      const res = await request(app).get('/api/restaurants');

      expect(res.status).toBe(200);
    });
  });

  describe('POST /api/restaurants', () => {
    test('should create a restaurant with success', async () => {
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

      expect(res.body.convenience.openLate).toBeTruthy();
    });

    test('shouldn`t create a restaurant without title', async () => {
      const fixture = { ...restaurantFixture };
      delete fixture.title;

      const res = await request(app).post('/api/restaurants')
        .send(fixture);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('title', 'O título é um campo obrigatório.');
    });

    test('shouldn`t create a restaurant without date', async () => {
      const fixture = { ...restaurantFixture };
      delete fixture.date;

      const res = await request(app).post('/api/restaurants')
        .send(fixture);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('date', 'A data é um campo obrigatório.');
    });

    test('shouldn`t create a restaurant without service rating', async () => {
      const fixture = { ...restaurantFixture };
      delete fixture.ratings.service;

      const res = await request(app).post('/api/restaurants').send(fixture);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toMatchObject({
        ratings: {
          service: 'A nota para o serviço é um campo obrigatório.',
        },
      });
    });
  });

  describe('GET /api/restaurants/:id', () => {
    test('should get a restaurant by id with success', async () => {
      const { _id } = await Restaurants.findOne().exec();
      const res = await request(app).get(`/api/restaurants/${_id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('title', 'Outback');
    });
  });

  describe('PUT /api/restaurants/:id', () => {
    test('should update a restaurant with success', async () => {
      const { _id } = await Restaurants.findOne().exec();
      const res = await request(app).put(`/api/restaurants/${_id}`)
        .send({ title: 'Madero' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('title', 'Madero');
    });

    test('shouldn`t update a restaurant with empty title', async () => {
      const { _id } = await Restaurants.findOne().exec();
      const res = await request(app).put(`/api/restaurants/${_id}`)
        .send({ title: '' });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('title', 'O título é um campo obrigatório.');
    });

    test('shouldn`t update a restaurant with empty date', async () => {
      const { _id } = await Restaurants.findOne().exec();
      const res = await request(app).put(`/api/restaurants/${_id}`)
        .send({ date: '' });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('errors');
      expect(res.body.errors).toHaveProperty('date', 'A data é um campo obrigatório.');
    });
  });

  describe('DELETE /api/restaurants/:id', () => {
    test('should delete a restaurant with success', async () => {
      const { _id } = await Restaurants.findOne().exec();
      const res = await request(app).delete(`/api/restaurants/${_id}`);

      expect(res.status).toBe(204);
    });
  });
});
