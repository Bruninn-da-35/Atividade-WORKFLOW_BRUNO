const request = require('supertest');


test('Deve retornar erro 404 ao buscar por ordens Jedi, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/jedi_orders/');
   
    expect(resposta.status).toBe(404);
});
