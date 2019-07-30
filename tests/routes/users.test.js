const request = require('supertest');

const app = require('../../src/app');
const Users = require('../../src/models/users');

describe('Users', () => {
  beforeAll(async (done) => {
    await Users.collection.deleteMany({});
    done();
  });

  afterAll(async (done) => {
    await Users.collection.deleteMany({});
    done();
  });

  describe('POST /restaurants/api/restaurants', () => {
    test('should create a restaurant with success', async () => {
      const res = await request(app).post('/restaurants/api/signin')
        .send({ name: 'john', email: 'john@gmail.com', password: '123' });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('name', 'john');
      expect(res.body).not.toHaveProperty('password');
    });
  });
});
