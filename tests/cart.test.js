const request = require('supertest');
const app = require('../index');
const ShoppingCart = require('../models/Cart');

describe('Test Cart', () => {
    
    const cartData = {
        "brickId": 2,
        "propertyId": 2,
        "price": 100
    }

    let cart;

    test('Create cart object', () => {
        cart = new ShoppingCart()
        expect(cart).toMatchObject({ items: [] })
    });

    test('Should add brick to cart', async () => {
        
        try {
            const response = await request(app)
            .post('/api/v1/add')
            .send(cartData)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            expect(response.statusCode).toBe(201)
            expect(response.header['content-type']).toMatch(/json/);
        } catch (error) {
            console.log(`Error ${error}`)
        }
    });

    test('Should remove brick from cart', async () => {
        try {
            console.log(cart)
            const response = await request(app)
            .post('/api/v1/remove')
            .send({brickId: cartData.brickId, propertyId: cartData.propertyId})
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            expect(response.statusCode).toBe(200)
            expect(response.header['content-type']).toMatch(/json/);
        } catch (error) {
            console.log(`Error ${error}`)
        }
    });
  });