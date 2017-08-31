const keys = require('../config/keys');

module.exports = requireAdmin = (req, res, next) => {
  if (req.user.googleId !== keys.adminId) {
    res.status(401).send('Error, unauthorized access');
  }

  next();
};
