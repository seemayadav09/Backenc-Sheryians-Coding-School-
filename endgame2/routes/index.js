var express = require('express');
var router = express.Router();
const userModel=require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//how I can perform a case-insensitive searh in Mongoose
router.get("/find",async function(req,res){
  var regex = new RegExp("Harsh",'i');
  let user=await userModel.find({username:regex})
  res.send(user);
})
//above code se woh sb user dikhenge jisme harsh word include h jaise harshiiii harshita
// solution
router.get("/find",async function(req,res){
  var regex = new RegExp("^Harsh$",'i');
  let user=await userModel.find({username:regex})
  res.send(user);
})
// isse kewal harsh naam ka user milega

//how do I find documents where an array field contains all of a set of values
router.get("/find",async function(req,res){
  let user=await userModel.find({categories:{$all:["fashion"]}})
  res.send(user);
})
// above code se woh user ka data milega jiski category me fashion ho

//how can I search for documents with a specific date range in Mongoose
router.get("/find",async function(req,res){
  var date1=new Date('2023-10-02')
  var date2=new Date('2023-10-03')

  let user=await userModel.find({datecreated:{$gte:date1,$lte:date2}})
  res.send(user);
})
//we will get all the users jo in dono date ke beech me bnaye gye h 


//how can I filter documents based on the existance of a field in  Mongoose
router.get("/find",async function(req,res){
  let user=await userModel.find({categories:{$exits:true}})
  res.send(user);
})
//ese saare user jisme category field exist krti h does not matter koi value h ya nhi usme

//how can I filter documents based in a specific field's length in Mongoose
router.get("/find",async function(req,res){
  let user=await userModel.find({
   $expr:{
    $and:[
      {$gte: [{$strLenCP:'$nickname'}, 0]},
      {$lte:[{$strLenCP:'$nickname'}, 12]}
    ]
   }
  })
  res.send(user);
})
//all the users jinke nickname ki length 0 se 12 tk ho
router.get('/create',async function(req,res){
  let userdata=await userModel.create({
    username:"harsh",
    nickname:"heheh",
    description:"I am a person",
    categories:['js','react']
  
  })
  res.send(userdata)
  
})


// router.get('/failed',function(req,res){
//   req.flash("naam",data)
// })

//doosre router pr check krna 
// router.get('/check',function(req,res){
//   req.flash("naam")
// })
//usecase jaise hm login route pr gye or login fail ho gya to doosre route pr req failed dikhana hota h

module.exports = router;
