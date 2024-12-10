const express = require('express')
const { getCourses, getCourseById } = require('../controllers/coursesController.js')

const router = express.Router()

router.route('/').get(getCourses)
router.route('/:id').get(getCourseById)

module.exports = router