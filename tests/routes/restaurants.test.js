const request = require('supertest');

const app = require('../../src/app');
const Restaurants = require('../../src/models/restaurants');

const fixture = {
  title: 'Outback',
  rating: 10,
  knowFor: 'Restaurante australiano',
  fame: 'Restaurante australiano',
  ocasion: 'Aniversário',
  date: '11/05/2019',
  observations: 'Costela acompanha arroz e batata, serve duas pessoas. Chokki thunder burger: delicioso porém muito doce, pedir em grupo, tem carregador portátil.',
  address: 'Shopping aricanduva ',
  waitTime: '16min',
  ratings: {
    service: 5,
    environment: 4.5,
    price: 4.5,
    food: 3.5,
  },
  recomendations: {
    askNext: 'Camarão ',
    neverAsk: '',
    worth: true,
  },
  convenience: {
    wifi: true,
    goodWines: true,
    goodForGroups: true,
    funny: true,
    goodForCouples: true,
    music: true,
    airConditioning: true,
    parking: true,
    openLate: true,
    acceptCards: true,
  },
};

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
      .send(fixture);

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
