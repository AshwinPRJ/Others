/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {
		"po_id" : "PO",
		"creation_time" : "2018-06-10",
		"item_id" : "item",
		"quantity" : 100,
		"vendor_id" : "VO",
		"supplier_code" : "SC",
		"co_ords" : "C"
	};

csvReport(item);	

function csvReport(item){
	var data = ['po_id','creation_time','item_id','quantity','vendor_id','supplier_code','co_ords'];
	//console.log(item);
	for(var i = 1; i <= 1000000; i++){
		var item_data = [item.po_id+[i] , item.creation_time , item.item_id+[i], item.quantity, item.vendor_id+[i], item.supplier_code+[i], item.co_ords+[i]];
		data = data +'\n'+ item_data;
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./createPO50L.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}