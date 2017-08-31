const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

//models
require('./models/User');
require('./models/Post');

//Services
require('./services/passport');

//Connection to database
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

//Generates an express app
const app = express();

app.use(
  cookieSession({
    name: 'session',
    age: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/authRoutes')(app);
require('./routes/adminRoutes')(app);
require('./routes/postRoutes')(app);
//Dynamically assigned port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
