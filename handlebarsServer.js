var express = require('express');

var app = express();

var port = 1337;

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const dir = __dirname + '/public/';

app.use(express.static('public'));
app.use(express.static('public/img'));
app.use(express.static('public/css'));
app.use(express.static('public/data'));
app.use(express.static('public/js'));

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/index', function(request, response) {
    response.render('index');
});

app.get('/about', function(request, response) {
    response.render('about');
});

app.get('/action', function(request, response) {
    response.render('action');
});

app.get('/character', function(request, response) {
    response.render('character');
});

app.get('/ddpage', function(request, response) {
    response.render('ddpage');
});

app.get('/generate', function(request, response) {
    response.render('generate');
});

app.get('/skills', function(request, response) {
    response.render('skills');
});

app.get('/spell', function(request, response) {
    response.render('spell');
});

// 404 Catch-all
app.use(function(request, response) {
    response.status(404);
    response.render('404');
})

app.use(function(err, request, response, next) {
    console.error(err.stack);
    response.status(500);
    response.render('500');
})

app.listen(port, function(){
    console.log('Express started on http://localhost:' + port + ' ; press Ctrl+C to terminate.')
})