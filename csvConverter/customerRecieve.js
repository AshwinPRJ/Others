/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {		
		"so_no" : "SO",
        "customer_code" : "CC",
		"co_ords" : "C",
		"dispatched_id" : "DI",
		"created_date": "2018-01-19 ",
		"status" : "R"
	};

csvReport(item);	

function csvReport(item){
	var data = ['so_no','customer_code','co_ords','dispatched_id','created_date','status'];
	//console.log(item);
	for(var i = 1; i <= 1000; i++){
		var item_data = [item.so_no+[i],item.customer_code+[i],item.co_ords+[i], item.dispatched_id+[i],item.created_date,item.status];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./customerRecieve.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}