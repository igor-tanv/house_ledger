const express = require('express')
const LedgerService = require('../../services/index')

const router = new express.Router()

router.get('/api', async (req, res) => {
  res.json({ "foo": "bar" })
})

router.post('/api/ledger', async (req, res) => {
  res.status(200).json(LedgerService.create(req.body))
})

module.exports = router