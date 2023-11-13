// var figlet=require(`figlet`);

// figlet("Happy Diwali",function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data); 
//   });

const express = require('express')
const app = express()
const port = 3000

app.use(function(req,res,next){
    console.log("hello from middleware");
    next();
});
//there is an issue with middleware, agr middleware chal gya toh request jam ho jati aur route tk nhi phuch paati
//that is why we use next()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// nodemon => if we made any changes in code then we need to again start the server but with nodemon we need not to do that nodemon apne aap ye krdeta h if we make any changes in the code
// nodemon filename for running the file


