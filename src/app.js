import express from 'express';
import routes from './routes.js';
import './database';

// classe não necessita de ()

class App{
  //O constructor é necessario.
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;
