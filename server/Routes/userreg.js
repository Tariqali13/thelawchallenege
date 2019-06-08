const express = require("express");
const router = express.Router();
let userReg=module.require('../models/userreg')



router.post("/", (req, res)=> {
    let UserReg = new userReg(req.body);
    UserReg.save()
    .then(res => {
      console.log("sucess")
      res.json(200, "Data is send to db", post);
    })
    .catch(err => {
      console.log("error")

      res.json(404, "unable to save to database", err);
    });
    // res.json(req.body)

  });

  
router.delete('/deluser', (req, res) => {
  const { id } = req.body;
  userReg.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});



  router.get("/", (req, res) => {
    userReg.find().then(resp => res.json(resp));
  })
module.exports=router;