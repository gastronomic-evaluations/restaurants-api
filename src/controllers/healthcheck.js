const { connection } = require('mongoose');

const healthcheck = (req, res) => {
  const dictionary = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  return res.json({
    status: 'ok',
    database: dictionary[connection.readyState],
  });
};

module.exports = healthcheck;
