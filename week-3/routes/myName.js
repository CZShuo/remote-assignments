const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/', (req, res) =>{
    let name= req.cookies.username;
    return res.render('myName',{name});
})

module.exports = router;