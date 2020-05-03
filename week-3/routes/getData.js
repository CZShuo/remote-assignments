const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('',(req, res)=>{
    const { number }=  req.query;
    if(!number){
        return res.render('getData')
    }
    const caculate = {number};
    const num = parseInt(number,10);

    if (num && num.toString()===number) {
        caculate.answer = ((1+num)*num)/2;
    }

    res.render('getData',caculate);
})

module.exports = router;