const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cyberNews = require('./api/cyberNews.json')
require('dotenv').config()
const port = process.env.PORT || 4000;

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("CyberNews successfully running")
});

app.get('/cybernews', (req,res) => {
    res.send(cyberNews)
})

app.get('/cybernews/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const cyber = cyberNews.filter(b => b.id === id)

    res.send(cyber)
})

app.listen(port, () => {
    console.log(`successfully connected to port ${port}`)
})