var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
	    type: String,
	    unique: true,
      required: true
	  },
	  phone: {
		  type: String,
		  unique: true,
		  required: true
	  },
	  password: {
		  type: String,
		  required: true
	  },
    hash: String,
    salt: String
  });

  // userSchema.methods.createUser = function(newUser, callback){
  //   bcrypt.genSalt(10, function(err, salt) {
  //       bcrypt.hash(newUser.password, salt, function(err, hash) {
  //           newUser.password = hash;
  //           newUser.save(callback);
  //       });
  //   });
  // }

  userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    //return this.hash;
  };

  userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  userSchema.methods.generateJwt = function() {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);
  
	return jwt.sign({
	  _id: this._id,
	  email: this.email,
	  username: this.username,
	  exp: parseInt(expiry.getTime() / 1000),
	}, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };


  mongoose.model('User', userSchema);