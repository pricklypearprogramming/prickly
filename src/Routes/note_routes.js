// routes/note_routes.js

// module.exports = function(exp, db) {
//   exp.post('/user', (req, res) => {
//     console.log(req.body);
//     res.send('Hello');
//   });
// };

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  exp.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const details = {_id: new ObjectID(id)};
    db.collection('users').findOne(details, (err, item) => {
      if (err) {
        res.send({error: 'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  exp.post('/user', (req, res) => {
    const user = {
      userName: req.body.userName,
      password: req.body.passwordHash,
      email: req.body.email,
    };
    db.collection('user').insert(user, (err, result) => {
      if (err) {
        res.send({error: 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};

exp.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const details = {_id: new ObjectID(id)};
  db.collection('users').remove(details, (err, item) => {
    if (err) {
      res.send({error: 'An error has occurred'});
    } else {
      res.send('Note ' + id + ' deleted!');
    }
  });
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const details = {_id: new ObjectID(id)};
  const note = {
    userName: req.body.userName,
    password: req.body.passwordHash,
    email: req.body.email,
  };
  db.collection('users').update(details, note, (err, result) => {
    if (err) {
      res.send({error: 'An error has occurred'});
    } else {
      res.send(note);
    }
  });
});
