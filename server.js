const express = require('express');
const db = require('./data/accounts-model.js')

const server = express();

// your code here
server.get('/', (req, res) => {
      
      db.find()
      .then(accounts => {
            res.status(200).json(accounts);
      })
      .catch(err => {
            res.status(500).json({ error: 'could not get accounts from database'});
      })
});



module.exports = server;