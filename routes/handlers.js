var DataHandler = require('./handlers/data_handler.js');
var HelloHandler = require('./handlers/hello_handler.js');

var handlers = {
    dataHandler: new DataHandler(),
    helloHandler: new HelloHandler()
};



module.exports = handlers;