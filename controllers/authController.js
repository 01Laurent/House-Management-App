const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { name, email, password: hashedPassword, role };
  db.query('INSERT INTO users SET ?', user, (err, results) => {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.status(201).send('User registered');
    }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) res.status(500).send('Server error');
    if (!results || !await bcrypt.compare(password, results[0].password)) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: results[0].id, role: results[0].role }, 'your_jwt_secret');
    res.json({ token });
  });
};
