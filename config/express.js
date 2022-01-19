const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
    const app = express();

    // VARIAVEIS DA APLICACAO
    app.set('port', process.env.PORT || config.get('server.port'));

    // MIDDLEWARES
    app.use(bodyParser.json());

    return app;
};