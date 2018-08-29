var express = require('express');
var router = express.Router();
const db = require('_helpers/db');
const Item = db.Item;
const Issue = db.Issue;

//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
//var User = mongoose.model('User');
//var jwt = require('express-jwt');

//import Item from '../models/item';
//import Issue from '../models/issue';


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