const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, email, password, age } = req.body;
    try {
        const newUser = new User({ name, email, password, age });
        await newUser.save();
        res.status(201).send({ message: 'User created successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Error creating user' });
    }
});