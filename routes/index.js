const express=require('express')

const router=express.Router();
const ProductRouter=require("./product")

router.use("/Product",ProductRouter)

module.exports=router