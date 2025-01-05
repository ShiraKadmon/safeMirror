const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) =>{
    const { name, email, password, age } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ error: 'User already exist' });
        }
        //password encryption
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        const newUser = new User({ name, email, password: hashedPassword, age });
        await newUser.save();
        res.status(201).send({ message: 'User created successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Error creating user' });
    }
}

const loginUser = async (req, res) =>{
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
      // check if password correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).send({ message: 'Login successful' });
    } catch (error) {
      res.status(500).send({ error: 'Error logging in' });
    }
  }

  const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password'); // without the password
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  module.exports = {
    createUser,
    loginUser,
    getUser,
   
  };