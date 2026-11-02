const users = require('../model/module.modules');
const userall=(req,res)=>{
    res.status(200).json({
        users
    });
}

module.exports= {userall};