const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const env = require('dotenv').config();

const api = require('./api/auth.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api', api)

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n\tEVERYONE LOVES CURRY! at ${port}`);
})