const express = require('express');
const app = express();
const pantalones = require('./pantalones');

app.get('/', (req, res) => {
    res.send( 'API is running')
})

app.get('/pantalones', (req, res) => {
    res.json(pantalones)
})

app.listen( process.env.PORT || 3000,()=> console.log('Server is running'));