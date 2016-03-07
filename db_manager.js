var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var file = "test.db";
var exists = fs.existsSync(file);
var db = new sqlite3.Database(file);

exports.createTable = function(tableName){
    db.serialize(function(){
        var query = "CREATE TABLE if not exists " + tableName + "(id INTEGER PRIMARY KEY, room TEXT, temperature REAL);";
        db.run(query);
    });
};

exports.select = function(query, doComplete){
    db.all(query, doComplete);
};

exports.insert = function(query){
    db.run(query);
};