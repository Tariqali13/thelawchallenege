const express = require("express");
const router = express.Router();
let News = module.require('../models/news')



router.post("/", (req, res) => {
  let news = new News(req.body);
  news.save()
    .then(res => {
      res.json(200, post);
    })
    .catch(err => {
      res.json(404, "unable to save to database", err);
    });
  // res.json(req.body)

});


router.post("/news", (req, res) => {
  console.log(req.body)
  News.findById(req.body.id).then(resp => res.json(resp));
});

router.get("/", (req, res) => {
  News.find().then(resp => res.json(resp));
});

module.exports = router;