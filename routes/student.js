var express = require("express");
const router = express.Router();
const studentController = require('../controllers/student');

router.get('/login',studentController.get_login);
router.post('/login',studentController.post_login);

module.exports = router;