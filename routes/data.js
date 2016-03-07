var express = require('express');
var router = express.Router();
var dbManager = require('../db_manager.js');

var dbManager = require('../db_manager.js');

router.post('/', function(req, res){
    var data = req.body;
    var room = req.body.room;
    var temperature = req.body.temp;
    var query = "INSERT INTO temperatures (room, temperature) VALUES (\"" + String(room) + "\", " + temperature +");";
    console.log(query);    
    dbManager.insert(query);
    res.send(data);    
});

router.get('/', function(req, res){
    var query = "SELECT * FROM temperatures;";
    dbManager.select(query, function(err, rows){
        outputData = [];
        rows.forEach(function(element, index, array){
            console.log(element + "|" + index);
            var dataItem = {room: element.room, temperature: element.temperature};
            outputData.push(dataItem);
        });
        res.render('data', {result: outputData});
        console.log(outputData);
    });
});


module.exports = router;