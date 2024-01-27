const {Category} = require("../models")


const getCategory = async(req,res) =>{
    try {
        const response = await Category.findAll();
        const result = {
            status: 200,
            data: response
        }
        res.json(result)
    } catch (error) {
        res.status(500).json({msg:error.message })
    }
}

const getCategoryById = async (req, res) => {
    try {
        const {id} = req.params
        const data = await Category.findByPk(id)
        if(data === null){
            return res.status(404).json({
                status:"failed",
                message: `data Category With ID ${id} is not Found!!!`
            })
        }
        res.json({
            status:"OK",
            data:data
        })
    } catch (error) {
        res.status(500).json({msg : error.message})
    }
}

const createCategory = async (req,res) =>{
    try {
        const { name } = req.body;
        const newCategory = await Category.create({name:name});
        res.status(201).json({
            status:"OK",
            data:{
                id:newCategory.id,
                name:newCategory.name,
                createdAt:newCategory.createdAt,
                updatedAt:newCategory.updatedAt

            }
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateCategory = async(req,res) =>{
    try {
       await Category.update(req.body,{
        where:{
            id:req.params.id
        }
       })
       res.status(200).json({msg: `Update Category by ID  Success...`});

    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }
}

const deleteCategory = async(req,res)=>{
    try {
        await Category.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({msg:`Delete Category by ID success...`})
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {getCategory, getCategoryById, createCategory,updateCategory,deleteCategory};