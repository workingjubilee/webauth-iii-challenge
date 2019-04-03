const Users = require('knex')(require('../knexfile.js').development)('users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

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
  console.log(user.password);

  try{
    const success = await Users.insert(user);

    res.status(200).json({ success })
  } catch(error) {
    res.status(500).json({
      message: "What did your crazy code break now?"
    })
  }

})


router.post('/login', async (req, res) => {

})

router.get('/users', async (req,res) => {
  // const token = req.headers.authorization;

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