const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
