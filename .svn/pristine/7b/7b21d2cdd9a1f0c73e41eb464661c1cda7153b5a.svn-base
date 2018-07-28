var db1 = require('seriate');



// SQL Server and database config
var configActivity = {

	   "Driver":"SQL Server Native Client 11.0",
     "server": "SACNTE286.americas.ad.flextronics.com",
      "user": "fpuser",
	   "port":"1433",
     "password": "F9us3r",
     "database": "appadoption",

	options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};


db1.addConnection(configActivity);
db1.stream = true;



// Add view count 
exports.viewsCount =  function(req,res){
	
			db1.execute(configActivity,{
						query: "INSERT INTO [appadoption].[dbo].mob_access_log (user_id,App_id,mod_id,Region) VALUES (@user_id,@App_id,@mod_id,@Region)",
						//query: "SELECT * FROM [appadoption].[dbo].mob_access_log",
						params: {
			            user_id: {
			                type: db1.NVARCHAR,
			                val: req.param('user_id')
			            },
						App_id: {
			                type: db1.Int,
			                val: req.param('App_id')
			            },
						mod_id: {
			                type: db1.Int,
			                val: req.param('mod_id')
			            },
						Region: {
			                type: db1.NVARCHAR,
			                val: req.param('Region')
			            }
			        }
				} ).then(function(results){
					res.send("success");
					//res.send({'files':results});
				}, function( err ) {
						console.log( "Something bad happened:", err );
				} );

};

//Track login records
exports.loginTracker = function(req,res){
	db1.execute(configActivity, {
				query: "INSERT INTO adp_access_reg (user_id, App_id,Region,Country,Registered_at,Last_login) VALUES"
						+"(@user_id, @App_id, @Region,@Country ,"
						+"(Select Top 1 Case When (Select count(user_id) From  adp_access_reg Where Ltrim(Rtrim(user_id)) = @user_id and app_id = @App_id) = 0 Then GETDATE()" 
						+"Else (Select Top 1 Registered_at From  adp_access_reg Where Ltrim(Rtrim(user_id)) = @user_id and app_id = @App_id order by registered_at Desc )" 
						+"End From  adp_access_reg), GETDATE())",
				params: {
							user_id: {
									type: db1.NVARCHAR,
									val: req.param('user_id')
							},
							App_id: {
									type: db1.Int,
									val: req.param('App_id')
							},
							Region: {
									type: db1.NVARCHAR,
									val: req.param('Region')
							},
							Country: {
									type: db1.NVARCHAR,
									val: req.param('Country')
							}
					}
		} ).then(function(results){
					
		
			
			res.send('Success');
			
			
		}, function( err ) {
				console.log( "Something bad happened:", err );
		} );

}



