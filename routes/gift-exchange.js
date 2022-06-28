const express = require('express')
const router = express.Router()
const GiftExchangeModel = require("../models/gift-exchange.js")

router.post('/pairs', function(req, res) {
    const names = req.body.names;
    const pairs = GiftExchangeModel.pairs(names)
    //GiftExchangeModel.pairs(names)
    res.send({pairs})
})

router.post('/traditional', function(req, res) {
    const names = req.body.names;
    const traditional = GiftExchangeModel.traditional(names)
    res.send(traditional)
})

module.exports = router