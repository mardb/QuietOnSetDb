
const express = require('express');

const router = express.Router();
const db = require('../models/');
const ctrl = require('../controllers');


router.get('/votes', ctrl.votes.index);
router.get('/votes/:id', ctrl.votes.show);
router.post('/votes', ctrl.votes.create);
router.put('/votes/:id', ctrl.votes.update);
router.delete('votes/:id', ctrl.votes.destroy);

module.exports = router;


