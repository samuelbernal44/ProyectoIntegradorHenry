/* eslint-disable linebreak-style */
const http = require('http');
const data = require('./utils/data');

const PORT = 3001;
http
  .createServer((req, res) => {
    // eslint-disable-next-line no-console
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if (url.includes('/rickandmorty/character')) {
      const id = parseInt(url.split('/').pop(), 10);
      const character = data.find((char) => char.id === id);
      if (character) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Character not found' }));
      }
    }
  })
  .listen(PORT, 'localhost');
