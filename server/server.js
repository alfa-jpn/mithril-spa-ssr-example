'use strict';
import express     from 'express';
import initializer from './initializer';
import app         from './app-server';

var server = express();
server.use(app);
server.use(express.static('public'));

var port = process.env.PORT || 3000;
console.log("Server is now rnning on port:" + port);

server.listen(port);
