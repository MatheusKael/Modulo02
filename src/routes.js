const { Router } = require('express');

const routes = new Router();

routes.get("/", (rre, res) => res.json({ Msg: 'eae' }));

module.exports = routes;
