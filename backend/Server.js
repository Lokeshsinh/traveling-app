const express   = require("express");
const router =  express.Router();
const {Collection} =  require('./Schema/TaskSchema')

router.get("/", async (req,res) => {
    try{
        const newAbout  =  await Collection.find({})
        res.status(200).json(newAbout)
    }catch(e){
        res.status(500).json({error:"internal server clash"})
    }
})

router.post("/about", async(req,res) => {
    try{
        const newAbout = await Collection(req.body);
        newAbout.save();
        res.status(200).json(newAbout)
    }
    catch(e){
        res.status(500).json({error:"internal server clash"})
    }
} )




module.exports = router