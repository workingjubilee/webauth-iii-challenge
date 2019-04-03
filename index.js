const express = require('express');
const api = require('./api/auth.js');


const server = express();


server.use('/api', api)


server.listen(4000, () => {
  console.log("\n\tEVERYONE LOVES CURRY!");
})