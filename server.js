'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var candies = []; 
var nextId= 1;

app.get('/candies', function(req, res){
	res.send(candies);
});


app.get('/candies/:id', function(req, res){
	var foundCandy;
	var targetId = parseInt(req.params.id);
	for(var i = 0; i < candies.length; i++){
		if (candies[i].id === targetId) {
	foundCandy=candies[i];
}
	}
	res.send(foundCandy);
});

app.post('/candies', function(req, res){
	var newCandy = req.body;
	if (newCandy.id === undefined) {
		newCandy.id = nextId;
		nextId++;
	}
	candies.push(newCandy);
	console.log(newCandy);
	res.send(newCandy);
});

app.delete('/candies/:id', function(req, res){
 console.log('candy delete', req.params);
  var candyId = req.params.id;
  // find the index of the destination we want to remove
  var deleteCandyIndex = candy.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('deleting candy with index', deleteCandyIndex);
  var candyToDelete = candy[deleteCandyIndex];
  candy.splice(deleteCandyIndex, 1);
  res.json(candyToDelete);
});
app.listen(3000);