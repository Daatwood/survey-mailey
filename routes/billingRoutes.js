const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    stripe.charges
      .create({
        amount: 500,
        currency: "usd",
        description: "Charge for Survey credits",
        source: req.body.id
      })
      .then(
        async function(result) {
          // TODO ensure the charge was successfull
          req.user.credits += 5;
          const user = await req.user.save();
          res.send(user);
        },
        function(err) {
          res.status(422).send({ error: err.message });
        }
      );
  });
};
