const { Router } = require('express');

const routes = new Router();


routes.get('/', (rre, res)=>{
  return res.json({Msg: "eae"});
})

module.exports = routes; 