const express = require("express");
const router = express.Router();
let userReg=module.require('../models/userreg')



router.post("/", (req, res)=> {
    let UserReg = new userReg(req.body);
    UserReg.save()
    .then(res => {
      res.json(200, "Data is send to db", post);
    })
    .catch(err => {
      res.json(404, "unable to save to database", err);
    });
    // res.json(req.body)

  });

  router.post("/userreg", (req, res) => {
    console.log(req.body)
    userReg.findById(req.body.id).then(resp => res.json(resp));
  });
  
  router.get("/", (req, res) => {
    userReg.find().then(resp => res.json(resp));
  })
module.exports=router;