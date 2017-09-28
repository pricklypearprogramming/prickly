// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./db');

const exp = express();

const port = 8000;

exp.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require('./src/components/services/routes')(exp, database);
  exp.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
