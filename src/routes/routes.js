const express = require('express')
const User = require('../models/user')

const router = express.Router()
router.use(express.json());

router.post('/users', async(req, res)=>{
    let user = req.body.user;
    try {
        
        const newUser = await User.create({
            name: user.name,
            lastName: user.lastName,
            email: user.email.toLowerCase().trim(),
            roles: user.roles,
            password: user.password,
            image: user.image,
            tokens:user.token
        })
       
        res.status(201).send({ user: newUser})
    } catch (error) {
        const errors = {};
        if (error.errors) {
            for (const key in error.errors) {
                errors[key] = error.errors[key].message;
            }
        }
        res.status(400).send({ message: 'Validation Error', errors });
    }
})



module.exports = router