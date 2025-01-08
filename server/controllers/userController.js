import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) =>{
    const { name, email, birthDate, password, phoneNumber } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ error: 'User already exist' });
        }
        //password encryption
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        const newUser = new User({ name, email, birthDate, password: hashedPassword, phoneNumber});
        await newUser.save();
        console.log(newUser.birthDate);
       
        res.status(201).send({ message: 'User created successfully!' });
    } catch {
        res.status(500).send({ error: 'Error creating user' });
    }
}

export const loginUser = async (req, res) =>{
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
    }  catch{
      res.status(500).send({ error: 'Error logging in' });
    }
  }

