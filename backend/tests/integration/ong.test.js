const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async() => {
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong 2",
                email: "ong2@email.com",
                whatsapp: "4788888888",
                city: "Rio do Sul",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to create a new session', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong 2",
                email: "ong2@email.com",
                whatsapp: "4799999999",
                city: "Rio do Sul",
                uf: "SC"
            });
        
        const ong = response.body;

        const session = await request(app)
            .post('/sessions')
            .set('Authorization', ong.id)
            .send({
                id: ong.id
            });

        expect(session.body).toHaveProperty('name');
        expect(session.body.name).toBe('Ong 2');
    });

    it('should not log in profile', async () => {
        await request(app)
            .get('/profile')
            .expect(400);
    });
});