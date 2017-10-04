import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://admin:admin@ds157444.mlab.com:57444/crudwithredux';

mongodb.MongoClient.connect(dbUrl, (err, db) => {
  app.get('/games', (req, res) => {
    const id = req.params.id;
    db
      .collection('games')
      .find({})
      .toArray((err, games) => {
        res.json({games});
      });
  });
  app.listen(8080, () => {
    console.log('server is running on location:8080');
  });
});

// if (err) {
//   res.send({error: 'An error occured'});
// } else {
//   res.send(games);
// }
