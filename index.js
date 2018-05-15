const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User') // Define model class
require('./services/passport'); // Load passport

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
  keys: [keys.cookieKey] // Encypt cookie with key
}))

app.use(passport.initialize());
app.use(passport.session());

// Require and pass app into route
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000
app.listen(PORT);