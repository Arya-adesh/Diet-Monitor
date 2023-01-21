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

app.post('/reg', (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
//    console.log(username);
//    console.log(password);
	// Validate the input
	if (password.length < 5) {
		notifier.notify({
			title: 'Diet Monitor',
			message: 'Password should be atleast 5 characters long',
			icon:'static\im6.png'
		});
	  }
	else{

	  // Check if password consists of numbers and letters only
	  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
	  if (!regex.test(password)) {
		notifier.notify({
			title: 'Diet Monitor',
			message: 'Password should have alphabets and numbers both',
			icon:'static\im6.png'
		});
	  }
	  else {
	if (!username || !password) {
	 
		notifier.notify({
			title: 'Diet Monitor',
			message: 'Bad Request: Missing required fields',
			icon:'static\im6.png'
		});
	}
   else {
	// Check if the username already exists in the database
	connection.query(
	  'SELECT * FROM accounts WHERE username = ?',
	  [username],
	  (error, results) => {
		if (error) throw error;
  
		if (results.length > 0) {
		  
			notifier.notify({
				title: 'Diet Monitor',
				message: 'Conflict: User already exists',
				icon:'static\im6.png'
			});
			
		}
        else{
		// Create the user object
		const user = {
		  username,
		  password
		};
        const str="sdnjs%%5%$4322$$$sadafsbh";
		// Save the user to the database
			connection.query('INSERT INTO accounts(username, password) values (?, AES_ENCRYPT(?,?))', [username, password,str],
		  (error, results) => {
			if (error) throw error;
			req.session.loggedin = true;
			req.session.username = username;
			res.redirect('/quiz.html');
			
		  }
		);
		}}
	);
	} }}
});

app.get('/timeline', function (req, res) {
	const date = req.query.date;
	console.log(date);
    var userN= req.session.username;
	console.log(req.session.username);
	// console.log(session.username);
	// perform a query to select the date and description from the 'timeline' table
	// connection.query('SELECT date, description FROM timeline as t', function (error, results, fields) {

		connection.query('SELECT * FROM nutrient WHERE username = ? and date = ?',[userN, date], function(error, results) {
	// connection.query('SELECT date, description FROM timeline as t', function (error, results, fields) {
	  if (error) throw error;
	  
	  // loop through the results and print the date and description to the webpage
	  res.send(results);
	//   console.log(results);
	});
  });
  app.get('/timeline2', function (req, res) {
	
	const date = req.query.date;
    var userN= req.session.username;
	console.log(req.session.username);
	

		connection.query('SELECT * FROM food INNER JOIN nutrient on food.date1=nutrient.date and food.hours=nutrient.hours and food.min=nutrient.min and food.sec=nutrient.sec  and food.username=nutrient.username WHERE date1 =? and food.username= ?  ', [date, userN], function(error, results) {
	// connection.query('SELECT date, description FROM timeline as t', function (error, results, fields) {
	  if (error) throw error;
	  
	  // loop through the results and print the date and description to the webpage
	  res.send(results);
	//   console.log(results);
	});
  });


