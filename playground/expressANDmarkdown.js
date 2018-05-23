const path = require('path')
const fs = require('fs')
const md = require('markdown-it')()
const express = require('express')
const app = express();

function render(relativePath) {
    return md.render(
        fs.readFileSync(path.resolve(__dirname, relativePath), 'utf-8')
    )
}

app.listen(3000, ()=>console.log('Serve on 3000'))

app.get('/', (req, res)=>{
    res.send(render('test.md'))
})

var content = "# Hello \n ## PASSED \n > Qoute\n```\nvar code = 45\n```";

app.get('/test', (_, res)=>{
    res.send(md.render(content))
})