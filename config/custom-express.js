require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const templates = require('../app/views/templates');

app.use('/estatico', express.static('./app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

const sessionAuthentication = require('./session-authentication');
sessionAuthentication(app);

const routes = require('../app/routes/routes.js');
routes(app);

app.use((req, resp, next) => {
  return resp.status(404).marko(
    templates.base.error404
  );
});

app.use((erro, req, resp, next) => {
  return resp.status(500).marko(
    templates.base.error500
  );
});

module.exports = app;

