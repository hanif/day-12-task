const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const lusca = require('lusca');
const responseTime = require('response-time');

const initLocalsMiddleware = require('./middleware/init-locals');
const errorMiddleware = require('./middleware/error');
const notFoundMiddleware = require('./middleware/not-found');
const routes = require('./routes');

const app = express();
const basePath = path.dirname(__dirname);

app.set('env', process.env.NODE_ENV);
app.set('x-powered-by', false);
app.set('case sensitive routing', true);
app.set('views', path.join(path.dirname(__dirname), 'templates'));
app.set('view engine', 'pug');
app.set('trust proxy', 1);

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log('Unhandled Rejection:', err.stack);
});

app.use(responseTime());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(basePath, 'public')));

// prevent clickjacking and cross site scripting
// see: https://github.com/krakenjs/lusca
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

// initialize middlewares
app.use(initLocalsMiddleware());

// expose routes
app.use(routes);

// fallback middleware
app.use(errorMiddleware());
app.use(notFoundMiddleware());

module.exports = app;
