const router = require('express').Router();
const emailController = require('../controllers/emailController');

router
  .route('/')
  .post(emailController.sendInviteEmail);

module.exports = router;