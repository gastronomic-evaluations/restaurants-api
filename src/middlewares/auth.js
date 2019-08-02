const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: 'no token' });

  const parts = authHeader.split(' ');

  if (!parts.length === 2) return res.status(401).send({ error: 'no token' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'token malformatted' });

  return jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'token invalid' });
    req.userId = decoded.id;
    return next();
  });
};
