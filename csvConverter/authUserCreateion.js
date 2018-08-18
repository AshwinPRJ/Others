var fs 				= require('fs');
var request 	= require('request');

for(var i = 1; i <= 35; i++){
		var item_data = {
		"email" 				:"wardInspector"+i+"@nviera.com",
  	"first_name" 		:"wardInspector"+i,
  	"middle_name" 	:"wardInspector"+i,
  	"last_name" 		:"wardInspector"+i,
  	"contact_no"		: 23456,
  	"password"			:"wardInspector"+i+"@123",
  	"loginId"				:"wardInspector"+i,
  	"roleName"			:"wardInspector"
	};

var options = {
  uri: 'http://localhost:7890/api/v1/authserver/users',
  method: 'POST',
  json: item_data
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.id);
  }else{
  	console.log("body", body);
  	console.log("error", error);
  }
});
	
}
