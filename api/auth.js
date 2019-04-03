const Users = require('knex')(require('../knexfile.js').development);

const router = require('express').Router();


router.get('/users', async (req,res) => {
  res.status(200).send("Yes, it works!")
});

module.exports = router;