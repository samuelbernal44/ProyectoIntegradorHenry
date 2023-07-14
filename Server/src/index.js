require('dotenv').config();
const server = require('./app');
const { conn } = require('./DB_connection');

const { PORT } = process.env;

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server raised in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
