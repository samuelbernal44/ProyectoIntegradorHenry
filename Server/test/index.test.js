/* eslint-disable no-undef */
const session = require('supertest');
const app = require('../src/app');
const users = require('../src/utils/users');

const agent = session(app);

describe('Test de RUTAS', () => {
  xdescribe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const res = await agent.get('/rickandmorty/character/1');
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name');
      expect(res.body).toHaveProperty('species');
      expect(res.body).toHaveProperty('gender');
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('origin');
      expect(res.body).toHaveProperty('image');
    });

    it('Si hay un error responde con status: 500', async () => {
      const res = await agent.get('/rickandmorty/character/5555');
      expect(res.statusCode).toEqual(500);
    });
  });

  xdescribe('GET /rickandmorty/login', () => {
    it('validar login correcto', async () => {
      const res = await agent.get(
        // eslint-disable-next-line comma-dangle
        `/rickandmorty/login?email=${users[0].email}&&password=${users[0].password}`
      );
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ access: true });
    });

    it('validar login incorrecto', async () => {
      const res = await agent.get(
        // eslint-disable-next-line comma-dangle
        '/rickandmorty/login?email=carlosaugusto@gmail.com&password=Nose324'
      );
      expect(res.statusCode).toBe(401);
      expect(res.body).toEqual({ access: false });
    });
  });

  describe('POST /rickandmorty/fav', () => {
    it('enviar por body un personaje devolviendo un objeto json con el mismo', async () => {
      const res = await agent.post('/rickandmorty/fav').send({
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: 'Earth (C-137)',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        // eslint-disable-next-line comma-dangle
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        {
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: 'Earth (C-137)',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          // eslint-disable-next-line comma-dangle
        },
      ]);
    });

    it('enviar por body otro personaje devolviendo un objeto json con todos los personajes', async () => {
      const res = await agent.post('/rickandmorty/fav').send({
        id: '2',
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: 'unknown',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        {
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: 'Earth (C-137)',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          // eslint-disable-next-line comma-dangle
        },
        {
          id: '2',
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: 'unknown',
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        },
      ]);
    });
  });

  describe('DELETE /rickandmorty/fav/:id', () => {
    it('Si no existe el id enviado por params, devolver el arreglo con todos los personajes sin modificar', async () => {
      res = await agent.delete('/rickandmorty/fav/3');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        {
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: 'Earth (C-137)',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          // eslint-disable-next-line comma-dangle
        },
        {
          id: '2',
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: 'unknown',
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        },
      ]);
    });

    it('al enviar un id valido se elimina un personaje', async () => {
      res = await agent.delete('/rickandmorty/fav/2');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        {
          id: '1',
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          origin: 'Earth (C-137)',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          // eslint-disable-next-line comma-dangle
        },
      ]);
    });
  });
});
