 const request = require('supertest');
const app = require('./app');

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ status: 'ok' });
});

test('GET /quote returns a quote', async () => {
  const res = await request(app).get('/quote');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('quote');
});