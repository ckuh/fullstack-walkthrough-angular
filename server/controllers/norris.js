const express = require('express');
const router = express.Router();
const norrisHelper = require('../helpers/norrisHelper');


router.get('/:num', (req,res) => {

  //call randomJokes and use promises to extract jokes
  norrisHelper.randomJokes(req.params.num)
    .then((resp, body) => {
      res.send(JSON.parse(resp.body).value)
    })
})

module.exports = router;