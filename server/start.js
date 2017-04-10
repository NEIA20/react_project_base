const express = require('express');
const { resolve } = require('path');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

const app = express();
module.exports = app;

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(resolve(__dirname, '..', 'public')));
app.use(express.static(resolve(__dirname, '..', 'node_modules')));
//  OR:
// app.use(resolve(express.static(__dirname, '..', '/public')));
// app.use(resolve(express.static(__dirname, '..', '/node_modules')));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'public', 'index.html'));
});

app.get('/assets/app.js', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'assets', 'app.js'));
});

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

// app.use('/api', require('./api'))
