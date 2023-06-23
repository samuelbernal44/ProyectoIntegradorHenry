const users = require('../utils/users');

const login = (req, res) => {
  const { email, password } = req.query;
  const authorized = users.find(
    // eslint-disable-next-line comma-dangle
    (user) => user.email === email && user.password === password
  );
  if (authorized) {
    res.status(200).json({ access: true });
  } else {
    res.status(401).json({ access: false });
  }
};

module.exports = login;
