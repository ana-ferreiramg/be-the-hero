const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENT', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should be able to create a new INCIDENT', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong 1",
                email: "ong1@email.com",
                whatsapp: "4788888888",
                city: "Rio do Sul",
                uf: "SC"
            });
        
        const ong = response.body;

        const incident = await request(app)
            .post('/incidents')
            .set('Authorization', ong.id)
            .send({
                title: "Case 3",
                description: "Only test",
                value: '80'
            });

        expect(incident.body).toHaveProperty('id');
    });
});