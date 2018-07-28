var db = require('seriate');



// SQL Server and database config
var config = {
//Dev Db
	/*   "Driver":"SQL Server Native Client 11.0",
     "server": "GSSNTE808.asia.ad.flextronics.com",
      "user": "mobileux_coe",
	   "port":"1433",
     "password": "mobile@432",
     "database": "pulsenavigation",

*/

// Test Db
/*
"Driver":"SQL Server Native Client 11.0",
"server": "SACNTE286.americas.ad.flextronics.com",
"user": "fpuser",
"port":"1433",
"password": "F9us3r",
"database": "pulsenavigation",
*/

// Production Db
 	   "Driver":"SQL Server Native Client 11.0",
     "server": "SACSQLV10.americas.ad.flextronics.com\\sql1",
     "user": "flexpulse",
 	   "port":"1433",
     "password": "93773pulsefl3x",
     "database": "pulsenavigation",

	options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};


//db.addConnection(config);
db.stream = true;



// Get Category list
exports.getCategory =  function(req,res){
			db.execute(config, {
						query: "SELECT * FROM [pulsenavigation].[dbo].[category] where flag='Y' and category_type=@categoryType",
						params: {
			            categoryType: {
			                type: db.NVARCHAR,
			                val: req.param('category_type')
			            }
			        }
				} ).then(function(results){
					res.send({'files':results});
				}, function( err ) {
						console.log( "Something bad happened:", err );
				} );

};

//Get Report Details
exports.getReportDetails = function(req,res){
	db.execute(config, {
				query: "SELECT report_id, report_title,report_url,report_icon_url,report_description,category_id,training_doc_url,training_video_url, CASE   WHEN  exists (select report_id from dbo.favourites where dbo.favourites.report_id=dbo.report_detail.report_id and adid=@adId and flag='Y')  THEN 1     ELSE 0        END as Fav FROM dbo.report_detail where category_id=@categoryId and flag='Y'",
				params: {
							categoryId: {
									type: db.NVARCHAR,
									val: req.param('category_id')
							},
							adId: {
									type: db.NVARCHAR,
									val: req.param('adid')
							}
					}
		} ).then(function(results){
			res.send({'files':results});
		}, function( err ) {
				console.log( "Something bad happened:", err );
		} );

}

//Get Favourites listen
exports.getFavourites = function(req,res){
	db.execute(config, {
				query: "SELECT rep.report_id,rep.report_title,rep.report_description,rep.report_url,rep.report_icon_url,rep.training_doc_url,rep.training_video_url,cat.category_id,category_name,cat.category_icon_url,cat.category_type FROM dbo.report_detail rep INNER JOIN dbo.favourites fav ON rep.report_id=fav.report_id INNER JOIN dbo.category cat on cat.category_id = fav.category_id where fav.flag='Y' and fav.adid=@adID",
				params: {
							adId: {
									type: db.NVARCHAR,
									val: req.param('adid')
							}
					}

		} ).then(function(results){
			res.send({'files':results});
		}, function( err ) {
				console.log( "Something bad happened:", err );
		} );

}

exports.deleteFav = function(req,res){
	db.execute(config, {
				query: "UPDATE [pulsenavigation].[dbo].[favourites]  SET [flag] = 'N' where category_id=@category_id AND report_id = @report_id AND adid = @adid AND flag = 'Y'",
					params: {
							category_id: {
									type: db.NVARCHAR,
									val: req.param('category_id')
							},
							report_id: {
									type: db.NVARCHAR,
									val: req.param('report_id')
							},
							adid: {
									type: db.NVARCHAR,
									val: req.param('adid')
							},

					}
		} ).then(function(results){
			res.send('success');
		}, function( err ) {
				console.log( "Something bad happened:", err );
		} );
}

exports.addFav = function(req,res){

	db.execute(config, {
				query: "INSERT INTO [pulsenavigation].[dbo].[favourites]([category_id] ,[report_id] ,[adid] ,[flag])VALUES (@category_id,@report_id,@adid,@flag)",
					params: {
							category_id: {
									type: db.NVARCHAR,
									val: req.param('category_id')
							},
							report_id: {
									type: db.NVARCHAR,
									val: req.param('report_id')
							},
							adid: {
									type: db.NVARCHAR,
									val: req.param('adid')
							},
							flag: {
									type: db.NVARCHAR,
									val: 'Y'
							}
					}
		} ).then(function(results){
			res.send('success');
		}, function( err ) {
				console.log( "Something bad happened:", err );
		} );
}
