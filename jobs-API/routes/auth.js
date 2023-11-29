const express = require('express');
const router = express.Router();

const { register,login } = require('../controllers/auth');

// router.post('/register',register);
// router.post('/login',login);

router.route('/login').post(login);
router.route('/register').post(register);
module.exports = router;