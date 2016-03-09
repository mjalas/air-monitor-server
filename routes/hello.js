var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var outputName = "stranger!";
    if(req.param('name') != null){
        outputName = req.param('name') + "!";
    }
    res.render('hello', { name: outputName });
});

router.get('/test', function(req, res){
    res.send('Hello test!');

});

module.exports = router;