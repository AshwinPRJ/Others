/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {
		"po_id" : "PO",
		"vendor_id" : "VO",
		"batch_id": "BI",
		"created_date": "2018-01-19 ",
		"received_date" : "2018-01-22",
		"supplier_code" : "SC",
		"co_ords" : "C",
		"status" : "R"
	};

csvReport(item);	

function csvReport(item){
	var data = ['po_id','vendor_id','batch_id','created_date','received_date','supplier_code','co_ords','status'];
	//console.log(item);
	for(var i = 1; i <= 1000; i++){
		var item_data = [item.po_id+[i], item.vendor_id+[i], item.batch_id+[i], item.creation_date, item.received_date, item.supplier_code+[i], item.co_ords+[i],  item.status];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./manufactureReciept.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}