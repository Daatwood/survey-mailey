const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

// Load model classes
require("./models/User");
require("./models/Survey");

// Load passport
require("./services/passport");

// Connect to Db
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
    keys: [keys.cookieKey] // Encypt cookie with key
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Require and pass app into route
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// Serve Production build of React
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets like main.js, or main.css
  app.use(express.static("client/build"));
  // Express will serve index.html file if route is not recognized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
