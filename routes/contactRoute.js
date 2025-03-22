const express = require("express")
const router = express.Router()
const {getAllProducts,createProduct,updateProduct,getProduct,deleteProduct} = require("../controllers/productControllers")
router.route("/").get(getAllProducts)
router.route("/").post(createProduct)
router.route("/:id").get(getProduct)
router.route("/:id").put(updateProduct)
router.route("/:id").delete(deleteProduct)
module.exports = router