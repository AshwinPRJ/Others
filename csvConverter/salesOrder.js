/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {		
		"so_no" : "SO",
        "customer_code" : "CC",
		"co_ords" : "C",
		"product_code": "PC",
		"quantity" : 10,
		"delivery_date" : "2018-3-19"
	};

csvReport(item);	

function csvReport(item){
	var data = ['so_no','customer_code','co_ords','product_code','quantity','delivery_date'];
	//console.log(item);
	for(var i = 1; i <= 1000; i++){
		var item_data = [item.so_no+[i],item.customer_code+[i],item.co_ords+[i], item.product_code+[i], item.quantity+[i],item.delivery_date];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./salesOrder.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}