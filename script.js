

const express = require('express')
const app = express()
const port = 3000 

// app.use(function(req,res,next){
//     console.log("hello from middleware");
//     next();
// });
//there is an issue with middleware, agr middleware chal gya toh request jam ho jati aur route tk nhi phuch paati
//that is why we use next()
app.set("view engine","ejs");
app.use(express.static('./public'));
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render("index",{age:12}) //index page pr jha jha age hoga wha wha 12 aa jayega


})

//make sure ki render krte wqt views folder ki hi kisi file ka naam likhe
app.get("/error",function(req, res,next){
  throw Error("something went wrong")
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// nodemon => if we made any changes in code then we need to again start the server but with nodemon we need not to do that nodemon apne aap ye krdeta h if we make any changes in the code
// nodemon filename for running the file


