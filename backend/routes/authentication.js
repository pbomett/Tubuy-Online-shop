var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
//var User = require('../models/user');

module.exports.register = function(req, res) {
         
      var username = req.body.username;
	    var email = req.body.email;
	    var phone = req.body.phone;

      		//checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.json("User already exists!");
				}
				else {

          var newUser = new User({
						email: email,
						username: username,
						phone: phone
          });
          
          newUser.setPassword(req.body.password);

         // newUser.password = newUser.hash;
    
          //generating token
          newUser.save(function(err) {
              //newUser.save();
              if (err) {
                res.json(err);
              }
              var token;
              token = user.generateJwt();
              res.status(200);
              res.json({
                "token" : token
              });

              res.json("You are registered and can now login");
            });
				}
			});
		});

    };

    
    module.exports.login = function(req, res) {

      passport.authenticate('local', function(err, user, info){
        var token;
    
        // If Passport throws/catches an error
        if (err) {
          res.status(404).json(err);
          return;
        }
    
        // If a user is found
        if(user){
          token = user.generateJwt();
          res.status(200);
          res.json({
            "token" : token
          });
        } else {
          // If user is not found
          res.status(401).json(info);
        }
      })(req, res);
    
    };