var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());
app.set('public', __dirname + '/public');
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {
    res.render('index.html');
  });



var port = process.env.PORT;

app.listen(port);

console.log('Server now listening on port ' + port);

