const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/api/stocks', (req, res) => {
  const stocks = [
    {
      title: 'Apple',
      price: '123$'
    },
    {
      title: 'Tesla',
      price: '500$'
    }
  ];

  res.send(stocks);
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});