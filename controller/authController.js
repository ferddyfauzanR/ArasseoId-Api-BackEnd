const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

async function register(req, res) {
  try {
    const { username,fullName,email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username,fullName,email, password: hashedPassword });

    res.status(201).json({ 
        status:"OK",
        message: 'User registered successfully',
            data:{ 
                username:newUser.username,
                fullName:newUser.fullName,
                email:newUser.email
            }
         });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        status:"failed",
        message:error.parent.sqlMessage
     });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username ' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid  password' });
    }

    const token = jwt.sign({ username: user.username }, 'dsadsadsa', { expiresIn: '1h' });

    res.json({ 
        status:"Success Login",
        username:user.username,
        token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  register,
  login,
};
