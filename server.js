const express = require('express');
const db = require('./data/accounts-model.js')

const server = express();

// your code here
server.get('/', (req, res) => {
      res.send(`<h1>Is that right, Rambo?</h1>`).json({ message: "nailed it."})
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: 'cannot. even.' });
      })
});

server.get('/api/accounts', (req, res) => {
      
      db.find()
      .then(accounts => {
            res.status(200).json(accounts);
      })
      .catch(err => {
            res.status(500).json({ error: 'could not get accounts from database'});
      })
});

server.get('/api/accounts/:id',  (req, res) => {
      const id = req.params.id;
      
      db.findById(id)
      .then(account => {
            res.status(200).json(account);
            // 201 CREATED
      })
      .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Couldn't get that account.." });
      })
});

module.exports = server;