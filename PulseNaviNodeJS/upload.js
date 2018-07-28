var path = require('path');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: 'images/sideIcons',

  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))

  }
})

var storageReportIcons = multer.diskStorage({
  destination: 'images/reportIcons',

  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))

  }
})



var upload = multer({ storage: storage,limits: { fileSize: 1* 1024 * 1024 } }).single('file');

var uploadReportIcons = multer({ storage: storageReportIcons,limits: { fileSize: 1* 1024 * 1024 } }).single('file');

// Upload file
exports.uploadmethod = function(req,res){



	upload(req, res, function (err) {
    if (err) {
		res.send({'status':'Error Upload','object':req.file});
      // An error occurred when uploading
      return
    }

  res.send({'status':'Success','object':req.file});
    // Everything went fine
  })
};


// Upload file
exports.uploadmethodReport = function(req,res){



	uploadReportIcons(req, res, function (err) {
    if (err) {
		res.send({'status':'Error Upload','object':req.file});
      // An error occurred when uploading
      return
    }

  res.send({'status':'Success','object':req.file});
    // Everything went fine
  })
};
