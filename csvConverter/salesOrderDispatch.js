/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {		
		"so_no" : "SO",
        "customer_code" : "CC",
		"co_ords" : "C",
		"dispatched_id" : "DI",
		"qty_delivered" : 10,
		"product_code": "PC",
		"production_lotNo" : "PL",
		"delivery_date" : "2018-3-19",
		"expiry_date": "2019-1-18"
	};

csvReport(item);	

function csvReport(item){
	var data = ['so_no','customer_code','co_ords','dispatched_id','delivery_date','product_code','qty_delivered','production_lotNo','expiry_date'];
	//console.log(item);
	for(var i = 1; i <= 1000; i++){
		var item_data = [item.so_no+[i],item.customer_code+[i],item.co_ords+[i], item.dispatched_id+[i], item.delivery_date, item.product_code+[i], item.qty_delivered+[i], item.production_lotNo+[i], item.expiry_date];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./salesOrderDispatch.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}