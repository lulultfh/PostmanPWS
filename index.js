const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.send('Berhasil akses GET /test');
});