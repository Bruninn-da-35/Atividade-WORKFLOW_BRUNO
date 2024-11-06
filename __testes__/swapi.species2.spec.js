const request = require('supertest');

describe('Testes para a espécie Droid', () => {

    test('Deve verificar informações principais e características físicas da espécie Droid', async () => {
        const resposta = await request('https://swapi.dev/api').get('/species/2/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Droid');
        expect(resposta.body.classification).toBe('artificial');
        expect(resposta.body.designation).toBe('sentient');
        expect(resposta.body.average_height).toBe('n/a');
        expect(resposta.body.average_lifespan).toBe('indefinite');
        expect(resposta.body.skin_colors).toBe('n/a');
        expect(resposta.body.hair_colors).toBe('n/a');
        expect(resposta.body.eye_colors).toBe('n/a');
    });

    test('Deve verificar associações e propriedades adicionais da espécie Droid', async () => {
        const resposta = await request('https://swapi.dev/api').get('/species/2/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.language).toBe('n/a');
        expect(resposta.body.homeworld).toBeNull();

        // Verificar personagens associados
        expect(resposta.body.people).toBeDefined();
        expect(resposta.body.people.length).toBe(4);
        expect(resposta.body.people).toEqual([
            'https://swapi.dev/api/people/2/',
            'https://swapi.dev/api/people/3/',
            'https://swapi.dev/api/people/8/',
            'https://swapi.dev/api/people/23/'
        ]);

        // Verificar filmes associados
        expect(resposta.body.films).toBeDefined();
        expect(resposta.body.films.length).toBe(6);
        expect(resposta.body.films).toEqual([
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/4/',
            'https://swapi.dev/api/films/5/',
            'https://swapi.dev/api/films/6/'
        ]);
    });

});
