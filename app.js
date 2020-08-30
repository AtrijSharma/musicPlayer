const express=require('express')
const app=express()
const httpServer = require('http').createServer(app);

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use('/',express.static(__dirname+'/static'))


let port =  process.env.PORT || 4444 
httpServer.listen(port,()=>{
    console.log("http://localhost:4444")
})
