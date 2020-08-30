const express=require('express')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let todo=[]

app.use('/',express.static(__dirname+'/static'))



app.listen(4444,()=>{
    console.log("http://localhost:4444")
})
