var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

import Item from '../models/item';
import Issue from '../models/item';


// Register User
router.post('/register', function (req, res) {
		// Validation
		if(!req.body.name){res.json('Name is required'); res.redirect('/register')};
		if(!req.body.email){res.json('Name is required'); res.redirect('/register')};
		if(!req.body.username){res.json('Username is required'); res.redirect('/register')};
		if(!req.body.password){res.json('Password is required'); res.redirect('/register')};
		if(!req.body.passwordConf){res.json('Password confiration is required'); res.redirect('/register')};
	
	
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.passwordConf;

	if (errors) {
		res.redirect('/register');
		res.json(errors);
	}
	else {
		//checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.render('register', {
						user: user,
						mail: mail
					});
				}
				else {
					var newUser = new User({
						name: name,
						email: email,
						username: username,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('/users/login');
				}
			});
		});
	}
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}


//------------------------------------------------------------
//------------------------------------------------------------

//application services routes

    //fetch records
    router.route('/issues').get((req, res ) => {
        Issue.find((err, issues) => {
            if(err)
                console.log(err);
            else 
                res.json(issues);
        });
	  });
	  
	    //fetch record
		router.route('/issues/:id').get((req, res) => {
			Issue.findById(req.params.id, (err, issue) => {
				if (err)
					console.log(err);
				else
					res.json(issue);
			})
		  });
		  
		  //add record
		  router.route('/issues/add').post((req, res) => {
			let issue = new Issue(req.body);
			issue.save()
				 .then(issue => {
					 res.status(200).json({'issue': 'Added successfully'});
				 })
				 .catch(err => {
					 res.status(400).send('Failed to create new record');
				 });
		  });
		  
		  
		  //update record
		  router.route('/issues/update/:id').post((req, res) => {
			Issue.findById(req.params.id, (err, issue) => {
				if(!issue)
					return next(new Error('Could not load Document'));
				else {
					issue.title = req.body.title;
					issue.responsible = req.body.responsible;
					issue.description = req.body.description;
					issue.severity = req.body.severity;
					issue.status = req.body.status;
		  
					issue.save().then(issue => {
						res.json('Update done');
					}).catch(err => {
						res.status(400).send('Update failed');
					});
				}
			});
		  });
		  
		  //delete record
		  router.route('/issues/delete/:id').get((req, res) => {
			Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) =>{
				if (err)
					res.json(err);
				else
					res.json('Removed successfully');
			});
		  });
		  
		  
		//   fetch items
		  router.route('/items').get((req, res) => {
		    Item.find((err, items) => {
		        if (err)
		            console.log(err);
		        else
		            res.json(items);
		    });
		  });

		        //fetch record
				router.route('/items/:id').get((req, res) => {
					Item.findById(req.params.id, (err, item) => {
						if (err)
							console.log(err);
						else
							res.json(item);
					})
				  });
			  
	

module.exports = router;