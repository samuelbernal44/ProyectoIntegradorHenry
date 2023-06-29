const server = require('./app');

const PORT = 3001;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server raised in port ${PORT}`);
});
