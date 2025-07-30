const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.status(200).json({message: 'GET /test berhasil dijalankan'});
});

app.get('/cinta', (req,res) => {
    res.send('No Cinta')
})

app.get('/response', (req,res) => {
    res.json({
        method: req.method,
        url: req.url,
        headers: req.headers
    })
})

app.get('/data', (req,res) => {
    res.json({
        nama: 'Jokowi',
        alamat: 'Solo',
        profesi: 'Menggemaskan'
    })
})

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});