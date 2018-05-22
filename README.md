# Survey Mailey

Collect feedback directly from email with an yes or no questionaire.

Utilizing [Mongoose](http://mongoosejs.com/), [ExpressJS](https://expressjs.com/), [React](https://reactjs.org/), [Node](nodejs.org)

## Getting Started

* Node 8.11.1
* NPM 6.0.1

### Prerequisites

Requires public and private keys from the following services and [MongoDB Url](https://mlab.com/home)

* [Stripe](https://stripe.com/) - Online payment handling
* [SendGrid](https://sendgrid.com/) - Sending out emails
* [Google OAuth](http://console.developers.google.com/) - Sign in with Google

### Installing

Create a dev.js keys file and populate with keys from prerequisite services

```
cp ./config/prod.js ./config/dev.js
```

Build server

```
npm install
```

Build client

```
cd client
npm install
```

### Running Development

```
npm run dev
```

### Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Built With

* [Passport](https://github.com/jaredhanson/passport) - Unobtrusive authentication
* [Create React App](https://github.com/facebook/create-react-app) - Create React apps with no build configuration.
* [MaterializeCSS](http://materializecss.com/) - Front-end framework based on Material Design
* [Localtunnel](https://github.com/localtunnel/localtunnel) - Expose localhost for testing web hooks in development

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
