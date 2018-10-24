var http = require('http');
env_var = process.env.Version
var options = {
  host: "service2",
  port: 8097,
  path: "/",
  method: "GET"
};

http.createServer(function(req,res){
    var rq = http.request(options, function(rs) {
        rs.on('data', function (chunk) {
             res.write(chunk);
             res.write(env_var)

        });
        rs.on('end', function () {
            res.end();
        });
    });
    rq.end();
}).listen(8094);