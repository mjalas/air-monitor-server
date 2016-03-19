var IndexHandler = require('./handlers/index_handler')
var DataHandler = require('./handlers/data_handler.js');
var HelloHandler = require('./handlers/hello_handler.js');

var handlers = {
    indexHandler: new IndexHandler(),
    dataHandler: new DataHandler(),
    helloHandler: new HelloHandler()
};

function setupRoutes(app){
    app.get('/', handlers.indexHandler.index);
    app.post('/data', handlers.dataHandler.postTemperature);
    app.get('/data', handlers.dataHandler.getTemperatures);
    app.get('/hello', handlers.helloHandler.helloVisitor);
}

module.exports = setupRoutes;