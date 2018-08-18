/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {
		"product_code": "PC",
		"dateof_mixing": "2017-1-24",
        "production_lotNo" : "PL",
		"co_ords" : "C",
		"product_qty" : 10,
		"ingredient_code" : "item",
        "ingredient_batchNo" : "BI",
		"quantity" : 10
	};

csvReport(item);	

function csvReport(item){
	var data = ['product_code','dateof_mixing','production_lotNo','co_ords','product_qty','ingredient_code','ingredient_batchNo','quantity'];
	//console.log(item);
	for(var i = 1; i <= 1000; i++){
		var item_data = [item.product_code+[i], item.dateof_mixing, item.production_lotNo+[i], item.co_ords+[i], item.product_qty+[i], item.ingredient_code+[i], item.ingredient_batchNo+[i], item.quantity+[i]];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./productCreation.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}