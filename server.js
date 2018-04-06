const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/models.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.send("Hello World"));

app.post('/save', (req, res) => {
  console.log(req.body);
    db.insert(req.body);
    res.send();
  }
)

app.listen(3000, () => console.log('Server is listening on port 3000!'));

