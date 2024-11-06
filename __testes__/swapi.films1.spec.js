const request = require('supertest');

test('Deve verificar informações básicas de A New Hope', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/1/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('A New Hope');
    expect(resposta.body.episode_id).toBe(4);
    expect(resposta.body.director).toBe('George Lucas');
    expect(resposta.body.producer).toBe('Gary Kurtz, Rick McCallum');
    expect(resposta.body.release_date).toBe('1977-05-25');
    expect(resposta.body.opening_crawl).toContain('It is a period of civil war');
});

test('Deve verificar personagens, planetas e naves de A New Hope', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/1/');

    expect(resposta.status).toBe(200);

    // Verificar personagens
    expect(resposta.body.characters).toBeDefined();
    expect(resposta.body.characters.length).toBeGreaterThan(0);
    expect(resposta.body.characters[0]).toBe('https://swapi.dev/api/people/1/');

    // Verificar planetas
    expect(resposta.body.planets).toBeDefined();
    expect(resposta.body.planets.length).toBeGreaterThan(0);
    expect(resposta.body.planets[0]).toBe('https://swapi.dev/api/planets/1/');

    // Verificar naves
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThan(0);
    expect(resposta.body.starships[0]).toBe('https://swapi.dev/api/starships/2/');
});
