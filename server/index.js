const express=require("express");
const app=express();
const mongoose=require("mongoose")
const cors=require("cors");

app.use(cors({orgin:true}))
app.use(express.json())
let userSchema=mongoose.Schema(
    {
        name:String,
        country:String,
        age:Number        
            
    })

    let user=mongoose.model("user",userSchema)

mongoose.connect('mongodb://127.0.0.1:27017/userinfo', { useNewUrlParser: true ,  useUnifiedTopology: true });

const connection = mongoose.connection;



connection.once("open",()=>{
    console.log( "Mongodb database connection established succesfully")
})
app.get("/",(req,res)=>{
    user.find((err, users)=> {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
})
app.get("/:id",(req,res)=>{
    let id = req.params.id;
    user.findById(id, function(err, users) {
        res.json(users);
    });
})

app.post('/add', (req, res) =>{
    var userpostdata = {
      name: req.body.name,
      country: req.body.country,
      age: req.body.age
    };
  
    var data = new user(userpostdata);
    data.save();
  res.json(data);

  });
app.put("/update",(req,res)=>{
    var update=user.update({_id:req.body._id},{$set:{
        name: req.body.name,
      country: req.body.country,
      age: req.body.age
    }}).then(e=>res.json({message:"updated successfully"}))
    // res.json(update);
})
app.delete("/del/:id",(req,res)=>{
    var deldata=user.findByIdAndRemove(req.params.id)
    .then(e=>{
        res.json({message:"Deleted successfully"})
    })
})
const port=5000;
app.listen(port,()=>{
  
    console.log("server started on port 5000")
})