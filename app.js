const express=require('express')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let todo=[]

app.use('/',express.static(__dirname+'/static'))


let port =  process.env.PORT || 4444 
app.listen(port,()=>{
    console.log("http://localhost:4444")
})
