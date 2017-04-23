var express = require('express'),   
    app = express(),
    port = process.env.PORT || 2001,
    path = require('path');

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, function(){
    console.log(`server listening on port ${port}...`);
});