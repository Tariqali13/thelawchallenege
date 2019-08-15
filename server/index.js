const helmet = require("helmet");
const compression = require("compression");
const debug = require("debug")("app:startup");
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
module.require("./middleware")(app, express, mongoose);

// mongoose
//   .connect(
//     "mongodb+srv://vvorkclass103:s12345@cluster0-aoeoc.mongodb.net/test?retryWrites=true&w=majority",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     console.log("db is connected");
//   })
//   .catch(err => {
//     console.log("db is not connected", err);
//   });

// app.use(cors());
// app.use(helmet());
// app.use(compression());


// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, './build'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
require("./passport")(passport);

const mailsroutes = module.require("./Routes/mail");
app.use("/send", mailsroutes);

const loginroutes = module.require("./Routes/login");
app.use("/users", loginroutes);

const userRegroutes = module.require("./Routes/userreg");
app.use("/Reg", userRegroutes);

const newsroutes = module.require("./Routes/news");
app.use("/News", newsroutes);

const imageroutes = module.require("./Routes/images");
app.use("/firebaseUploads", imageroutes);

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     cb(null, './server/uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//   }
// })
// var upload = multer({ storage: storage }).array('file')
// app.use(("./uploads"), express.static("uploads"))
// const Image=require('./models/image');
// app.post('/upload',function(req, res) {
//     upload(req, res, function (err) {
//            if (err instanceof multer.MulterError) {
//                return res.status(500).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }
//       return res.status(200).send(req.file)

//     })
//     res.json(req.file);
// });
// app.get('/upload',(req,res)=>{
// res.json(req.file)
// })
// app.post("/firebaseUploads",(req,res)=>{
//   console.log(req.body)
//   let obj = {
//     imageName : req.body.url
//   }
//   let data = new image(obj);
//   data.save().then(resp=>res.json(resp))
// })
// app.post("/firebaseUploads/newsImages",(req,res)=>{
//   console.log(req.body)
//   let obj = {
//     imageName : req.body.url
//   }
//   let data = new NewsImage(obj);
//   data.save().then(resp=>res.json(resp))
// })
// app.get("/firebaseUploads",(req,res)=>{
// image.find().then(resp=>res.json(resp))
// })
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const port = process.env.PORT || 6600;
app.listen(port, () => console.log(`Listening on port ${port}`));
