const express = require('express');

const accountRouter = require('../data/routers/accountRouter.js');

const server = express();

server.use(express.json());
// your code here
server.get('/', (req, res) => {
      res.send(`<h1>Is that right, Rambo?</h1>`).json({ message: "nailed it."})
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: 'cannot. even.' });
      })
});

server.use('/api/accounts', accountRouter);

module.exports = server;