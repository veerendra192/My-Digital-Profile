const express = require('express');

const router = express.Router();

var pathhome = __dirname + '/pages/index.html';
var pathabout = __dirname + '/pages/about.html';

router.get('/', function (req, res){
    res.sendFile(pathhome);
});

router.get('/about', function (req, res){
    res.sendFile(pathabout);
});

module.exports = router;