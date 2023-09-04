const express = require('express')
const router = express.Router()
const userModel = require('../database/userModel')

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

router.use(express.json())

router.post('/login', async (req, res)=>{
    const users = await userModel.find({})
    const { email, password } = req.body
    
    const user = users.find(user => user.email === email && user.password === password)
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(400).send('credenciais inválidas') 
    } 
})

router.post('/signup', async (req, res)=>{
    try {
        const user = await userModel.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router