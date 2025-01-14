import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) =>{
    const { name, email, birthDate, password, phoneNumber } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ error: 'User already exist' });
        }

        // calculate age group
        const calculateAgeGroup = (birthDate) => {
          const today = new Date();
          const birth = new Date(birthDate);
          const age = today.getFullYear() - birth.getFullYear();

          if (age >= 12 && age <= 14) {
              return "12-14";
          } else if (age >= 15 && age <= 16) {
              return "15-16";
          } else if (age >= 17 && age <= 18) {
              return "17-18";
          } else {
              return null; // Age group not defined
          }
      };

      const ageGroup = calculateAgeGroup(birthDate);
      if (!ageGroup) {
          return res.status(400).json({ error: 'Age group not defined for the given birth date' });
      }
        //password encryption
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
       
        // create user
        const newUser = new User({ name, email, birthDate, password: hashedPassword, phoneNumber, ageGroup});
        await newUser.save();
       
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

