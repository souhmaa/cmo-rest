'use strict';

const express = require('express');

// Constants
const PORT = 90;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const message = `MAIL = ${process.env.RDS_PASSWORD}`;
  res.send(message);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
