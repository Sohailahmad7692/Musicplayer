const express=require('express')
const app=express();
const path=require('path')
const router=express.Router();

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile('musicplayer.html',{root:__dirname})
})
app.listen(800,function(){
    console.log('server is running')
})
// var http=require('http')
// var url=require('url')
// var fs=require('fs');
// http.createServer(function(req,res){
//     fs.readFile('musicplayer.html',function(err,data){
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//           } 
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data);
//         return res.end()
//     })
    // res.writeHead(400,{'Content-Type': 'text/html'});
    // res.write(req.url)
    // res.write('Hello World!');
    // var q = url.parse(req.url, true).query;
    //  var txt = q.year + " " + q.month;
    // res.end(txt);
    
// }).listen(800);