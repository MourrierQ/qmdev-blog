const mongoose = require('mongoose');
const post = mongoose.model('posts');

module.exports = app => {
  app.get('/api/posts', (req, res) => {
    res.send(req.user);
  });
};
