const db = require('../helpers/accounts-model.js');

const router = require('express').Router();

router.get('/', (req, res) => {
      
      db.find()
      .then(accounts => {
            res.status(200).json(accounts);
      })
      .catch(err => {
            res.status(500).json({ error: 'could not get accounts from database'});
      })
});

router.post('/', (req, res) => { 
      console.log(req.body)
      db.add(req.body)
      .then(account => {
            res.status(201).json({message: "success"});
            // 201 CREATED
      })
      .catch(err => {
            res.status(500).json({ error: 'could not post new account to database'});
      })
});

router.get('/:id',  (req, res) => {
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

router.put('/:id', (req, res) => {
      const id = req.params.id;
      const { name, budget } = req.body;
            if (! name || !budget) {
                  res.status(400).json({ message: "I'm sorry the account name and budget are both required."});
            } else {
                  db.update(id, req.body)
                  .then(account => {
                        if (account) {
                              res.status(200).json({message: "success"})
                        } else {
                              res.status(404).json({ message: 'That account number could not be found' })
                        }
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'Error updating that account' });
                  })
            } 
});


router.delete('/:id', async (req, res) => {
      try {
            const count = await db.remove(req.params.id);
            if (count > 0) {
                  res.status(200).json({ message: 'This account no longer exists.'})
            } else {
                  res.status(404).json({ message: 'That account id could not be found'})
            }
      } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error removing account' });
      }
});

module.exports = router;