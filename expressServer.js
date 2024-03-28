const express = require('express');

const app = express();

const port = 1337;

const dir = __dirname + '/public/';

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/data'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));

app.get('/', function(request, response) {
    response.sendFile(dir  + 'index.html');
});

app.get('/index', function(request, response) {
    response.sendFile(dir  + 'index.html');
});


app.get('/about', function(request, response) {
    response.sendFile(dir  + 'about.html');
});

app.get('/action', function(request, response) {
    response.sendFile(dir  + 'action.html');
});

app.get('/character', function(request, response) {
    response.sendFile(dir  + 'character.html');
});

app.get('/ddpage', function(request, response) {
    response.sendFile(dir  + 'ddpage.html');
});

app.get('/generate', function(request, response) {
    response.sendFile(dir  + 'generate.html');
});

app.get('/skills', function(request, response) {
    response.sendFile(dir  + 'skills.html');
});

app.get('/spell', function(request, response) {
    response.sendFile(dir  + 'spell.html');
});

//Wildcard Anything not defined
app.get('*', function(request, response) {
    response.sendFile(dir + '404.html'); 
});

app.listen(port, function() {
    console.log('Listening on http://localhost:' + port + ' press ctrl + c to quit...');
});