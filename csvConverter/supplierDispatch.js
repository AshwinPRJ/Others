/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {
		"po_id" : "PO",
		"batch_id": "BI",
		"item_id" : "item",
		"quantity" : 10,
		"supplier_code" : "SC",
		"co_ords" : "C",
		"dispatched_date": "2019-1-18",
		"expiry_date": "2019-1-18"
	};

csvReport(item);	

function csvReport(item){
	var data = ['po_id','batch_id','dispatched_date','item_id','quantity','expiry_date','supplier_code','co_ords'];
	//console.log(item);
	for(var i = 1; i <= 1000; i++){
		var item_data = [item.po_id+[i], item.batch_id+[i], item.dispatched_date, item.item_id+[i], item.quantity+[i], item.expiry_date, item.supplier_code+[i], item.co_ords+[i]];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./supplierDispatch.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}