function IndexHandler(){

    this.index = function(req, res){
        res.render('index', { title: 'Express' });
    };
}

module.exports = IndexHandler;