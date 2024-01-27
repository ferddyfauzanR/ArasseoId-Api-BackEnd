const {getProduct,getProductById,createProduct,updateProduct,deleteProduct} = require('../controller/productController')


const router = require("express").Router()

router.get('/product', getProduct)
router.get('/product/:id', getProductById)
router.post('/product',createProduct)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)



module.exports = router