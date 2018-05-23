const path = require('path')
const fs = require('fs')
const md = require('markdown-it')('commonmark');
const express = require('express')
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

function relative(filename){
    return path.resolve(__dirname, filename)
}
http.listen(3000, ()=>{console.log('Serve on 3000');})

app.get('/', (_, res)=>{
    res.sendFile(relative('index.html'))
})

io.on('connection', (socket)=>{
    console.log(socket.id + " Connected");
    socket.on('change', data=>{
        io.emit('render', {raw: data,processed: md.render(data)})
    })
})