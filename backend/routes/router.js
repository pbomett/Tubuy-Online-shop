var express = require('express');
var router = express.Router();
const db = require('_helpers/db');
const Item = db.Item;


//application services routes

				//   fetch items
		  router.route('/items').get((req, res) => {
		    Item.find((err, items) => {
		        if (err)
		            console.log(err);
		        else
		            res.json(items);
		    });
			});
			

		        //fetch item record
				router.route('/items/:id').get((req, res) => {
					Item.findById(req.params.id, (err, item) => {
						if (err)
							console.log(err);
						else
							res.json(item);
					})
					});
					

			// 	//fetch item by name
			router.route('/items/search/:name')
			.get(function(req, res) {
				var name = req.params.name;
				Item.findOne({ itemName: { 
					"$regex": "^" + name + "\\b", "$options": "i"
			}}, function(err, doc) {
					if (err)
						res.json(err)
						else 
						res.json(doc);
							});
					 }); 


		  
		  //add record
		  router.route('/items/add').post((req, res) => {
			let item = new Item(req.body);
			item.save()
				 .then(issue => {
					 res.status(200).json({'item': 'Added successfully'});
				 })
				 .catch(err => {
					 res.status(400).send('Failed to create new record');
				 });
		  });
		  
		  
		  //update record
		  router.route('/items/update/:id').post((req, res) => {
			Item.findById(req.params.id, (err, item) => {
				if(!issue)
					return next(new Error('Could not load Document'));
				else {
					item.name = req.body.name;
					item.codename = req.body.responsible;
					item.price = req.body.price;
					item.moq = req.body.moq;
		  
					item.save().then(issue => {
						res.json('Update done');
					}).catch(err => {
						res.status(400).send('Update failed');
					});
				}
			});
		  });
		  
		  //delete record
		  router.route('/item/delete/:id').get((req, res) => {
			Item.findByIdAndRemove({_id: req.params.id}, (err, issue) =>{
				if (err)
					res.json(err);
				else
					res.json('Removed successfully');
			});
		  });
		  

module.exports = router;