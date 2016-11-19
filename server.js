var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: 'public/uploads/'});

app.use(express.static(__dirname + "/public"));

app.post('/', upload.any(),function(req, res){
    res.send(req.files);
});

app.listen(3000);
console.log("server running on port 3000");