const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.post('/', (req, res) => {
    res.cookie('username',req.body.username);
    res.redirect('myName');
})

module.exports = router;