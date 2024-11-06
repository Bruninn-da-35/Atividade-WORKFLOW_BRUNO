const request = require('supertest');

test('Deve listar as batalhas mais importantes da Guerra dos Clones', async () => {
    const resposta = await request('https://swapi.dev/api').get('/clone-wars-battles/');

    expect(resposta.status).toBe(404);
  
});
