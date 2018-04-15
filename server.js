'use strict';

const express = require('express');

// Constants
const PORT = 90;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  let message = `MAIL = ${process.env.RDS_PASSWORD}\n`;
  message += `MAIL = ${process.env.AWS_ACCESS_KEY_ID}\n`;
  message += `MAIL = ${process.env.AWS_SECRET_ACCESS_KEY}\n`;
  message += `MAIL = ${process.env.EMAIL_ADDRESS}\n`;
  message += `MAIL = ${process.env.EMAIL_IMAP}\n`;
  message += `MAIL = ${process.env.EMAIL_PASSWORD}\n`;
  message += `MAIL = ${process.env.EMAIL_SMTP}\n`;
  message += `MAIL = ${process.env.OCR_LICENSE_CODE}\n`;
  message += `MAIL = ${process.env.OCR_USERNAME}\n`;
  message += `MAIL = ${process.env.RDS_DATABASE}\n`;
  message += `MAIL = ${process.env.RDS_HOST}\n`;
  message += `MAIL = ${process.env.RDS_PORT}\n`;
  message += `MAIL = ${process.env.RDS_USER}\n`;
  res.send(message);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
