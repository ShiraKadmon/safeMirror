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

  export const getUserByEmail = async (req, res) => {
    const { email } = req.query; // Get email from query parameters

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Find user in the database
        const user = await User.findOne({ email }).select('name birthDate phoneNumber'); // Retrieve specific fields

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user); // Return user data
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateUserDetails = async (req, res) => {
  const { email , birthDate, phoneNumber } = req.body;

  if (!email) {
      return res.status(400).json({ error: "Email is required for updates." });
  }

  try {
      const user = await User.findOneAndUpdate(
          { email }, // Filter by email
          { birthDate, phoneNumber }, // Update these fields
          { new: true } // Return the updated document
      );

      if (!user) {
          return res.status(404).json({ error: "User not found." });
      }

      res.status(200).json({ message: "User updated successfully.", user });
  } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Internal server error." });
  }
};