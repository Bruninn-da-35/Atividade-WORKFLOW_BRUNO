const request = require('supertest');

test('Deve visualizar informações de cadastro da nave Y-wing', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/11/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Y-wing');
    expect(resposta.body.model).toBe('BTL Y-wing');
    expect(resposta.body.manufacturer).toBe('Koensayr Manufacturing');
    expect(resposta.body.cost_in_credits).toBe('134999');
    expect(resposta.body.length).toBe('14');
    expect(resposta.body.max_atmosphering_speed).toBe('1000km');
    expect(resposta.body.crew).toBe('2');
    expect(resposta.body.passengers).toBe('0');
    expect(resposta.body.cargo_capacity).toBe('110');
    expect(resposta.body.consumables).toBe('1 week');
    expect(resposta.body.hyperdrive_rating).toBe('1.0');
    expect(resposta.body.MGLT).toBe('80');
    expect(resposta.body.starship_class).toBe('assault starfighter');

    // Verificando filmes em que a nave aparece
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBe(3);
    expect(resposta.body.films).toEqual([
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
    ]);

    // Verificando pilotos (lista vazia)
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBe(0);
});
