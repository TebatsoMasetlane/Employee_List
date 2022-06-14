const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')

const booksModel = require("./models/books");
const empModel = require("./models/emp")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/books",
{
  useNewUrlParser: true,

});

app.post("/create", async (req, res)=> {
    const userName = req.body.userName
    const email = req.body.email
    const password = req.body.password

    const books = new booksModel({userName: userName, email: email, password: password})

     try{
      await books.save();
     }catch(err){
         console.log(err)
     }
});
app.post("/Add", async (req, res)=> {
    const userName = req.body.userName
    const email = req.body.email
    const position = req.body.position

    const emp = new empModel({userName: userName, email: email, position: position})

     try{
      await emp.save();
     }catch(err){
         console.log(err)
     }
});
// app.get("/get", async (req,res)=>{
//   booksModel.find({},(err,result) =>
//    {if (err)
//     {
//     res.send(err);
//    }
//     res.send(result);
     
//      });
// })
app.get("/read", async (req,res)=>{
  empModel.find({},(err,result) =>
   {if (err)
    {
    res.send(err);
   }
    res.send(result);
     
     });
})

app.delete("/delete/:id",async(req,res)=>{
  const id = req.params.id;
  await empModel.findByIdAndRemove(id).exec()
})

app.listen(3001, ()  =>{
console.log("Server running on port 3001...");
})