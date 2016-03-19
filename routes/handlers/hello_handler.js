function HelloHandler(){
    this.helloVisitor = function(req, res){
        var outputName = "stranger!";
        if(req.param('name') != null){
            outputName = req.param('name') + "!";
        }
        res.render('hello', { name: outputName });
    }
}

module.exports = HelloHandler;