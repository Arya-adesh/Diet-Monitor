const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');



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
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND AES_ENCRYPT(?,?)=password', [username, password,str], function(error, results, fields) {
			// If there is an issue with the query, output the error
			// console.log(username);
			// console.log(password);
			// console.log(results);
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// document.cookie = `username=${username};expires=1800 * 1000;path=/`;
				// response.cookie("username",username);
				// sessionStorage.setItem("user",username);
				// response.redirect('/table.html');
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
			message: 'Please enter Username and Password!',
			icon:'static\im6.png'
		});
		
		response.end();
	}
});




