var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('Todo app is listening to port 3000!');
});