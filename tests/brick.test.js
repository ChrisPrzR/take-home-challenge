const request = require('supertest');
const app = require('../index');

describe('Test Brick Catalogue', () => {
    test('should retrieve brick list ', async () => {
      const response = await request(app).get('/api/v1/list');
      await expect(response.statusCode).toBe(201);
    })
    ;
  });