const express =require("express")
const productController=require("../controllers/productController")

const ProductRouter=express.Router();   //Allows you to create Child Routes.

ProductRouter.route("/")
.get(productController.getDetails)

module.exports=ProductRouter