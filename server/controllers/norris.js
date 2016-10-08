const express = require('express');
const router = express.Router();
const norrisHelper = require('../helpers/norrisHelper');


router.get('/', (req,res) => {

  //reconfigure our route to take params
  const numJokes = req.query.numJokes

  norrisHelper.randomJokes(numJokes)
    .then((resp, body) => {
      res.send(JSON.parse(resp.body))
    })
})

module.exports = router;