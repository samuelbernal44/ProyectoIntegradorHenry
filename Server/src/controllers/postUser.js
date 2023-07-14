const { User } = require('../DB_connection');

// eslint-disable-next-line consistent-return
async function postUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Faltan datos');
  }
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });
    if (created) {
      res.status(200).json(user);
    } else {
      res.status(409).send('El email ya esta registrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = postUser;
