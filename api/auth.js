const Users = require('knex')(require('../knexfile.js').development)('users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const restrict = require('./restrict.js');

const generateToken = user => {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options);  
}


router.post('/register', async (req,res) => {
  let user = req.body;
  const oldPass = user.password;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try{
    const success = await Users.insert(user);

    res.status(200).json(success)
  } catch(error) {
    res.status(500).json({
      message: "What did your crazy code break now?"
    })
  }

})


router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  try { 
    const matchUser = await Users.where({ username }).first();

    if (matchUser && bcrypt.compareSync(password, matchUser.password)) {
      const token = generateToken(matchUser);

      res.status(200).json({
        message: `Welcome ${username}!`,
        token
      })
    } else {
      res.status(401).json({ message: 'Invalid Credentials!' })
    }
  } catch(error) {
    res.status(500).json({ message: `Come back when the server isn't drunk.` })
  }
  
})

router.get('/users', restrict, async (req,res) => {

  try {
    let users = await Users.select('*');

    res.status(200).json(users)
  } catch(error) {
    res.status(500).json({
      message: "What did your crazy code break now?"
    })
  }
});

module.exports = router;