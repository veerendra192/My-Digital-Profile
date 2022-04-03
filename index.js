const express = require('express');
const app = express();
const myrouter = require('./myrouter');

app.use(express.static('pages'));
app.get('/', myrouter);
app.get('/about', myrouter);

app.listen(4000);