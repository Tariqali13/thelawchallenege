const express = require("express");
const router = express.Router();
let Mail = module.require('../models/mails')



router.post("/", (req, res) => {
  let mail = new Mail(req.body);
  mail.save()
    .then(res => {
      res.json(200, post);
    })
    .catch(err => {
      res.json(404, "unable to save to database", err);
    });
  // res.json(req.body)

});



router.post("/mails", (req, res) => {
  console.log(req.body)
  Mail.findById(req.body.id).then(resp => res.json(resp));
});
router.get("/", (req, res) => {
  Mail.find().then(resp => res.json(resp));
})

// function Validategenre(genre){
//   const schema={
//       name:Joi.string().min(3).required()
//   }
//   return Joi.validate(genre,schema);
// }

module.exports = router;