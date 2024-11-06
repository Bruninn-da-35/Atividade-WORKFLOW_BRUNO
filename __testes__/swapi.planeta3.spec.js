const request = require('supertest');

test('Deve visualizar informações de cadastro do planeta Yavin IV', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/3/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Yavin IV');
    expect(resposta.body.rotation_period).toBe('24');
    expect(resposta.body.orbital_period).toBe('4818');
    expect(resposta.body.diameter).toBe('10200');
    expect(resposta.body.climate).toBe('temperate, tropical');
    expect(resposta.body.gravity).toBe('1 standard');
    expect(resposta.body.terrain).toBe('jungle, rainforests');
    expect(resposta.body.surface_water).toBe('8');
    expect(resposta.body.population).toBe('1000');

    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBe(0);

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
});
