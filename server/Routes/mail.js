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


router.delete('/deldata', (req, res) => {
  const { id } = req.body;
  Mail.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});




router.get("/", (req, res) => {
  Mail.find().then(resp => res.json(resp));
})

module.exports = router;