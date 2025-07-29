const express = require('express');
const { askChatGPT } = require('../controller/aiController');
const router = express.Router();

router.post('/ask', askChatGPT);

module.exports = router;