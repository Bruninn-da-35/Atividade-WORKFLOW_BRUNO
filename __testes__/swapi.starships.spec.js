const request = require('supertest');

test('Deve verificar informações básicas da Sentinel-class landing craft', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/5/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Sentinel-class landing craft');
    expect(resposta.body.model).toBe('Sentinel-class landing craft');
    expect(resposta.body.manufacturer).toBe('Sienar Fleet Systems, Cyngus Spaceworks');
    expect(resposta.body.cost_in_credits).toBe('240000');
    expect(resposta.body.length).toBe('38');
    expect(resposta.body.max_atmosphering_speed).toBe('1000');
    expect(resposta.body.crew).toBe('5');
    expect(resposta.body.passengers).toBe('75');
    expect(resposta.body.cargo_capacity).toBe('180000');
    expect(resposta.body.consumables).toBe('1 month');
    expect(resposta.body.hyperdrive_rating).toBe('1.0');
    expect(resposta.body.MGLT).toBe('70');
    expect(resposta.body.starship_class).toBe('landing craft');
});

test('Deve verificar a relação da Sentinel-class landing craft com o filme', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/5/');

    expect(resposta.status).toBe(200);

    // Verificar filme relacionado
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
});
