var data = require("../data.json");

exports.addFriend = function(req, res) {
   res.render('add', data);
   var fName = req.query.name;
   var fDesp = req.query.description;
   var imageLink = "http://lorempixel.com/400/400/people/"
   var jsonStr = {
	   'name': fName,
	   'description': fDesp,
	   'imageURL': imageLink
   };

   console.log(jsonStr);
   data["friends"].push(jsonStr);
}
