const express = require('express')
const db = require('./db')  
const pizza=require('./models/pizzaModel')
const app = express();

//cors to fix cors origin, body-parser to fix the post value on the server

app.use(express.json());



app.get('/', (req, res) => {
  res.send('server is   working')
})

app.get('/getpizzas', (req, res) => {

  pizza.find({},(err,docs)=>{

    if(err){
      console.log(err)
    }
    else{
      
      res.send(docs)
      console.log("getpizzas seccessfull")
    }
 
})})


const port=process.env.PORT|| 5000


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})