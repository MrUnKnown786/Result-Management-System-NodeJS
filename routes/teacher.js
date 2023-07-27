var express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher');

router.get('/login',teacherController.get_login);
router.post('/login',teacherController.post_login);
router.get('/option',teacherController.get_option);
router.get('/add',teacherController.get_add);
router.get('/viewall',teacherController.get_viewall);
router.post('/add',teacherController.post_add);
router.get('/edit/:id',teacherController.get_edit);
router.post('/edit/:id',teacherController.post_edit);
router.get('/delete/:id',teacherController.get_delete);

module.exports = router