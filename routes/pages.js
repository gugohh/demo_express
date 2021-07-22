const router = require('express').Router();
const pages = require('../controllers/pages')


//end points
router.get('/', pages.home)
router.get('/contact', pages.contact)
router.get('/about', pages.about)
router.get('/location', pages.location)
router.get('/pictures/:id?', pages.pictures)



module.exports = router