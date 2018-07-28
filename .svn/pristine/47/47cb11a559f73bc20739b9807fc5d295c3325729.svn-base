//import dependencies
var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
var  services = require('./services');
var  activity = require('./activity-log');
var  uploadFile = require('./upload');
var path = require('path');
var http = require('http');

app.use(cors());


app.use(express.static(__dirname + '/images'));


/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */
app.get('/getCategory',services.getCategory);
app.get('/getReportDetails',services.getReportDetails);
//app.get('/getFavourites',services.getFavourites);
app.get('/addFav',services.addFav);
app.get('/deleteFav',services.deleteFav);
app.get('/addReport',services.addReport);
app.get('/editReport',services.editReport);
app.get('/deleteReport',services.deleteReport);
app.get('/addCategory',services.addCategory);
app.get('/editCategory',services.editCategory);
app.get('/deleteCategory',services.deleteCategory);
app.get('/viewsCount',activity.viewsCount);
app.get('/loginTracker',activity.loginTracker);
app.post('/savedata',  uploadFile.uploadmethod);
app.post('/savedataReportIcons',  uploadFile.uploadmethodReport);
//app.get('/getActiveCategory',  services.getActiveCategory);
app.get('/getPulseRecords',services.getPulseRecords);

//app.listen(3006);
app.listen(3006, function(){

});
console.log('Running on port 3001');
