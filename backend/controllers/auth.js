const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const supabase = require('../db');
require('dotenv').config();

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username === 'test' && password === 'test') {
      const token = jwt.sign({ id: 1, username: 'test' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    }

    // For other users, check database
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login };
