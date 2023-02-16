

const http = require('http')
const express = require('express')

const app = express()



const server = http.createServer(app)


module.exports = server
app.get('/athlete',function(req,res){
    res.json({"myFavouriteathlete":"ronaldo"});
});
app.listen(3000,function() {
    console.log('app listening on port 3000');
});
