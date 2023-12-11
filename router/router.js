const express = require('express');
const router = express.Router();
const Controller = require('../controller');

router.get('/users', Controller.createUser);
router.post('/user', Controller.createNewUser);
router.post('/users/:id', Controller.findById);
router.delete('/users/:id', Controller.findAndDelete);
module.exports = router;


