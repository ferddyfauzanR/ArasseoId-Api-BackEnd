const { Product } = require("../models")

const getProduct = async (req, res) => {
    try {
        const response = await Product.findAll();

        const result = {
            status: 200,
            message: "Get All Data Succcess",
            data: response
           
        }
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Product.findByPk(id);

        if (data === null) {
            return res.status(404).json({
                status: "failed",
                message: "Data Id Not Found"
            })

        }
        res.json({
            status: "OK",
            message:"Get Product By Id Succes",
            data: data
            
        })
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async(req,res)=>{
    try {
        const {name,description,image_product,price,sku,categories_id} = req.body
        const newProduct = await Product.create({
            name:name,
            description:description,
            image_product:image_product,
            price:price,
            sku:sku,
            categories_id:categories_id
        })

        res.status(201).json({
            status:"OK",
            message:"Created Product Succes",
            data:{
                name: newProduct.name,
                description: newProduct.description,
                image_product: newProduct.image_product,
                price: newProduct.price,
                sku: newProduct.sku,
                categories_id: newProduct.categories_id
            }
            
        })
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProduct = async(req,res)=>{
    try {
        const { id } = req.params
        const data = await Product.findByPk(id);
        await Product.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        if (data === null) {
            return res.status(404).json({
                status: "failed",
                message: "Data Id Not Found"
            })

        }
        res.status(200).json({
            status:"Updated",
            msg: "Product Updated Success!!",
            data:data
            
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

const deleteProduct = async (req, res)=>{
    try {
        await  Product.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({msg:"Delete Product Success!!"})
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}


module.exports = { getProduct, getProductById,createProduct,updateProduct,deleteProduct }