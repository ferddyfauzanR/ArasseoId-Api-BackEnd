const {getCategory,getCategoryById,createCategory,updateCategory,deleteCategory } = require('../controller/categoryController')


const router = require("express").Router()


router.get('/categories', getCategory)
router.get('/categories/:id', getCategoryById)
router.post('/categories', createCategory)
router.patch('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)



module.exports = router
