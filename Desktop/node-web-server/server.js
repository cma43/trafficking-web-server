
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
// const anno = require('angular-annotorious');
const http = require('http');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'html');

app.use((req, res, next) => {
 var now = new Date().toString();
 var log = `${now}: ${req.method} ${req.url}`;
 console.log(log);


 fs.appendFile('server.log', log + '\n', (err) => {
 	if (err) {
 		console.log('Unable to append to server.log')
 	}
 })
next();
});


// app.use((req,res, next) => {
// 	res.render('login.hbs');
// });


app.use(express.static(__dirname + '/'));


// hbs.registerHelper('getCurrentYear', () => {
// 	return new Date().getFullYear()
// });

// hbs.registerHelper('screamIt', (text) => {
// 	return text.toUpperCase();
// });

app.get('/', (req, res) => { 
res.render('example.hbs');
});

// app.get('/about', (req,res) => {
// 	res.render('about.hbs', {
// 		pageTitle: 'About Page',
// 	});
// });


// app.get('/bad', (req,res) => {
// 	res.send({
// 		errorMessage: 'Unable to handle request!'
// 	});
// });


app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});

















