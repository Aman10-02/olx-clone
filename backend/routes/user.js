const router = require("express").Router();
// const passport = require('passport');
const User = require("../models/User.model");

router.post('/getdetail', async (req,res) => {
    if(req.body){
        console.log("req.ody", req.body)
        const requireduser = await User.findOne( { googleId : req.body } );
        console.log("getdetail/user",requireduser)
        res.status(200).json({
            success: true,
            message: "successfull",
            user: requireduser,
            //   cookies: req.cookies
        });
    }
    else{
        console.log("failed")
    }
});


module.exports = router;