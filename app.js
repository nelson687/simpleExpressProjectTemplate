var express = require('express');
var app = express();
var cons = require("consolidate");
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('index');
});
app.use(express.static(__dirname, 'public'));

module.exports = app;