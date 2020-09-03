const express = require('express')

const apiProxyController = require('../controllers/apiProxy')

const router = express.Router()

router.get('/', apiProxyController.fetchResults)
router.post('/', apiProxyController.fetchResultsPost)

module.exports = router