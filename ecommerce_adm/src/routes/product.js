const express = require('express')
const router = express.Router()

const isLoggedIn = require('./../services/auth/loggedin')

router.get('/', isLoggedIn, require('./../services/product/index'))
router.get('/new', isLoggedIn, require('./../services/product/new'))
router.get('/:id', isLoggedIn, require('./../services/product/show'))
router.post('/', isLoggedIn, require('./../services/product/create'))


router.put('/:id', isLoggedIn, require('./../services/product/update'))
router.delete('/:id', isLoggedIn, require('./../services/product/destroy'))

module.exports = router