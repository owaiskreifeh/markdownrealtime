const http = require('http'),
fs = require('fs'),
path = require('path')

const md = require('markdown').markdown;

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.resolve(__dirname, "test.md"), function(err, data){
        if(err){
            console.log(err);
        }else{
            res.write(md.toHTML(data));
            res.end();
        }
    } )
}).listen(3000)