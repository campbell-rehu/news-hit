var express = require('express'),   
    app = express(),
    port = 8000;

app.use(express.static('/build'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(port, function(){
    console.log(`server listening on port ${port}...`);
});