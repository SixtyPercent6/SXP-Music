var http = require('http');

http.createServer(function (req, res){
  res.write("7/24 Hosting Active");
  res.end();
}).listen(8080);