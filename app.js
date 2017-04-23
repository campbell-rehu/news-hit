var express = require('express'),   
    app = express();

app.use(express.static('../build'));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(4000, function(){
    console.log('server listening on port 3000...');
});