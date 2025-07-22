const express = require('express');
const app = express();
require('dotenv').config();


app.get('/name', (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});


module.exports = app;
