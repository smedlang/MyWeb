var express = require('express');
var app = express();
app.get('/', function(req, res){
res.send('first route');
});
app.listen(1337);

