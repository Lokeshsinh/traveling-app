const express  =  require("express");
const router = express.Router();
const {Comments} = require('./Schema/newTaskSchema')


router.get("/", async(req,res) => {
    try{
        const newConatct  = await Comments.find({})
        res.status(200).json(newConatct)
    }
    catch(err){
        res.status(500).json({error:"internal server clash"})
    }
})


router.post("/contact", async (req,res) => {
    try{
        const newConatct = await Comments(req.body);
        newConatct.save()
        res.status(200).json(newConatct)
    }catch(err){
        res.status(500).json({error:"internal server clash"})
    }
})

module.exports = router;