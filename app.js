var express = require('express'),   
    app = express(),
    port = process.env.PORT || 7000,
    path = require('path');

app.use(express.static(__dirname +'/build'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(){
    console.log(`server listening on port ${port}...`);
});