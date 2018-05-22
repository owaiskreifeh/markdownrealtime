const http = require('http'),
fs = require('fs'),
path = require('path')

var md = require('markdown-it')();

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.resolve(__dirname, "test.md"), "utf8", function(err, data){
        if(err){
            throw err
        }else{
            res.write(md.render(data));
            res.end();
        }
    } )
}).listen(3000)