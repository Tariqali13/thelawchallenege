const express = require("express");
const router = express.Router();
let image = module.require('../models/image')

router.post("/", (req, res) => {
    console.log(req.body)
    let obj = {
        imageName: req.body.url
    }
    let data = new image(obj);
    data.save().then(resp => res.json(resp))
})

router.get("/", (req, res) => {
    image.find().then(resp => res.json(resp))
})

module.exports=router;