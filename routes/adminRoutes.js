const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require('../middlewares/requireAdmin');

module.exports = app => {
  app.get('/api/admin', requireLogin, requireAdmin, (req, res) => {
    res.send(true);
  });
};
