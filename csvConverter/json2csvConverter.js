/**
* creation of .csv file with l Lakh records.
**/
var fs= require('fs');
	var item = {
		"po_id" : "PO",
		"creation_time" : "2018-06-10",
		"item_id" : "item",
		"quantity" : 10,
		"vendor_id" : "VO",
		"supplier_code" : "SC",
		"co_ords" : "C",
		"dispatched_date": "2019-1-18",
		"expiry_date": "2019-1-18",
		"batch_id": "BI",
		"created_date": "2018-01-19 ",
		"received_date" : "2018-01-22",
		"status" : "R",
		"product_code": "PC",
		"dateof_mixing": "2017-1-24",
        "production_lotNo" : "PL",
		"product_qty" : 10,
		"ingredient_code" : "item",
        "ingredient_batchNo" : "BI",
		"delivery_date" : "2018-3-19",
		"so_no" : "SO",
        "customer_code" : "CC",
		"dispatched_id" : "DI",
		"qty_delivered" : 10
	};

csvReport(item);	

function csvReport(item){
	var data = ['po_id','creation_time','item_id','quantity','vendor_id','supplier_code','co_ords','dispatched_date','expiry_date','batch_id','created_date','received_date','status','product_code','dateof_mixing','production_lotNo','product_qty','ingredient_code','ingredient_batchNo','delivery_date','so_no','customer_code','dispatched_id','qty_delivered'];
	//console.log(item);
	for(var i = 1; i <= 100000; i++){
		var item_data = [item.po_id+[i] , item.creation_time , item.item_id+[i], item.quantity+[i], item.vendor_id+[i], item.supplier_code+[i], item.co_ords+[i], item.dispatched_date, item.expiry_date, item.batch_id+[i], item.created_date, item.received_date, item.status, item.product_code+[i], item.dateof_mixing, item.production_lotNo+[i], item.product_qty+[i], item.ingredient_code+[i], item.ingredient_batchNo+[i], item.delivery_date, item.so_no+[i],item.customer_code+[i], item.dispatched_id+[i], item.qty_delivered+[i]];
		data = data +'\n'+ item_data;
		//console.log("itemid ",item.po_id+[i]);
	}
	
	//console.log("item >> "+JSON.stringify(item));
	return new Promise(function(resolve,reject){
		fs.writeFile('./csv_Report_001.csv', data, (err) => {
			console.log("file created successfully")
			resolve(data);
			if (err) reject(err);
		});
	})
}