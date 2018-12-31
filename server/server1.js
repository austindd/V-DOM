// var requirejs = require('requirejs');
let express = require('express');
let path = require('path');
var app = express();

console.log('--- Running Server 1');


app.get('/', (req, res) => {
    console.log(`\r\n-- DATA REQUESTED --\r\n${req}`);
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
    console.log(`\r\n-- DATA SERVED --\r\n'../public/index.html'`);
});


app.get('/node_modules/requirejs/require.js', (req, res) => {
    console.log(`\r\n-- DATA REQUESTED --\r\n${req}`);
    res.sendFile(path.join(__dirname, '../node_modules/requirejs/require.js'));
    console.log(`\r\n-- DATA SERVED --\r\n'/public/index.js'`);
});

app.get('/public/js/requirejs-config.js', (req, res) => {
    console.log(`\r\n-- DATA REQUESTED --\r\n${req}`);
    res.sendFile(path.join(__dirname, '../public/js/requirejs-config.js'));
    console.log(`\r\n-- DATA SERVED --\r\n'/public/index.js'`);
});

app.get('/public/js/index.js', (req, res) => {
    console.log(`\r\n-- DATA REQUESTED --\r\n${req}`);
    res.sendFile(path.join(__dirname, '../public/js/index.js'));
    console.log(`\r\n-- DATA SERVED --\r\n'/public/index.js'`);
});

app.get('/public/js/test.js', (req, res) => {
    console.log(`\r\n-- DATA REQUESTED --\r\n${req}`);
    res.sendFile(path.join(__dirname, '../public/js/test.js'));
    console.log(`\r\n-- DATA SERVED --\r\n'/public/test.js'`);
});

app.get('/public/vdom-core/vdom-component', (req, res) => {
    console.log(`\r\n-- DATA REQUESTED --\r\n${req}`);
    res.sendFile(path.join(__dirname, '../public/vdom-core/vdom-component.js'));
    console.log(`\r\n-- DATA SERVED --\r\n'/public/vdom-core/vdom-component.js'`);
});

// app.use(app.static(__dirname + '../public'));
// app.use('/public', express. app.static(path.path.join(__dirname, '/public')));

// app.use('/img', app.static(path.join(__dirname, 'public/images')));
// app.use('/js', app.static(path.join(__dirname, 'public/javascripts')));
// app.use('/css', app.static(path.join(__dirname, 'public/stylesheets')));

app.listen(3000);