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

  describe('POST /restaurants/api/signin', () => {
    test('should create a restaurant with success', async () => {
      const res = await request(app).post('/restaurants/api/signin')
        .send({ name: 'john', email: 'john@gmail.com', password: '123' });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('name', 'john');
      expect(res.body).toHaveProperty('token');
      expect(res.body).not.toHaveProperty('password');
    });
  });

  describe('POST /restaurants/api/auth', () => {
    test('should auth with succecss', async () => {
      const res = await request(app).post('/restaurants/api/auth')
        .send({ email: 'john@gmail.com', password: '123' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('name', 'john');
    });

    test('should return error if password is incorrect', async () => {
      const res = await request(app).post('/restaurants/api/auth')
        .send({ email: 'john@gmail.com', password: '1234' });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error', 'Usuário ou senha incorretos.');
    });

    test('should return error if email is incorrect', async () => {
      const res = await request(app).post('/restaurants/api/auth')
        .send({ email: 'john2@gmail.com', password: '123' });

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error', 'Usuário ou senha incorretos.');
    });
  });
});
