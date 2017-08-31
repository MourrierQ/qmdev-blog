module.exports = requireLogin = (req, res, next) => {
  if (!req.user) {
    res.status(401).send('Not connected');
  } else {
    next();
  }
};
