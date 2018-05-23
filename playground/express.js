const express = require('express'),
app = express(),
path = require('path');

app.listen(3000, ()=>{console.log('Server on  3000')})
app.use(express.static(
    path.resolve(__dirname, "../public")
))
