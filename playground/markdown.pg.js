const http = require('http'),
fs = require('fs'),
path = require('path')

const md = require('markdown-it')();

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.resolve(__dirname, "test.md"), "utf8", function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log(data)
            res.write(md.render(data));
            res.end();
        }
    } )
}).listen(3000)