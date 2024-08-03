const express = require("express");
const { mySchema } = require("./validation");
const { Book } = require("./db");
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/getBooks',async(req,res)=>{
   const books=await Book.find({})
   res.json({
    books
   })
})


app.post('/postBooks',async(req,res)=>{
   const userPayload = req.body;
   const {book,about,url} = req.body;
   const payload = mySchema.safeParse(userPayload)
   console.log(payload,"kkkkkkkkkkkkkkkkkkkkk");
   if(!payload.success){
    res.status(411).json({
        msg:"enter a correct inputs"
    }) 
    return
   }

   const existingBook = await Book.findOne({book})
   if(existingBook){
    res.json({
        msg:"we already have this book collection"
    })
    return
   }
  
  await Book.create({
    book:userPayload.book,
    about:userPayload.about,
    url:userPayload.url
  })
  res.json({
    msg:"Book created successfully"
  })
})


app.listen(3000,(req,res)=>{
    console.log("server statrted");
})
