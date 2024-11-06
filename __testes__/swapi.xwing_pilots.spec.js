const request = require('supertest');


test('Deve retornar erro 404 ao buscar por pilotos de X-Wing, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/xwing_pilots/');
   
    expect(resposta.status).toBe(404);
});
