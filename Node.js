const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');
const notifier = require('node-notifier');
const fileUpload = require("express-fileupload");
const { Console } = require('console');
const axios = require("axios");
var MongoClient = require('mongodb').MongoClient;
const fileUpload = require("express-fileupload");
const FormData = require("form-data");


const connection = mysql.createConnection({
	host     : '127.0.0.1',
    user     : 'root',
    password : 'aryaadesh29',
    database : 'userdb'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;

	const str="sdnjs%%5%$4322$$$sadafsbh";
	
	if (username && password) {
		//  SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND AES_ENCRYPT(?,?)=password', [username, password,str], function(error, results, fields) {
			// If there is an issue with the query, output the error
			
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				
				var userN=request.session.username;
				// run(userN);
				console.log(userN);
				response.redirect('/dashboard.html');
				// addIngredientsToCart();
			} else {
				notifier.notify({
					title: 'Diet Monitor',
					message: 'Incorrect Username and/or Password!',
					icon:'static\im6.png'
				});
				// response.send('Incorrect Username and/or Password!');
			}			
			// response.end();
		});
	} else {
		notifier.notify({
			title: 'Diet Monitor',
			message: 'Wrong Username and Password!',
			icon:'static\im6.png'
		});
		
		response.end();
	}
});




