const getAllProducts = (request,response)=>{
    response.status(200).json({message:"get all products"})
}

const createProduct = (request,response)=>{
    console.log(`this is the request body ${request.body}`)
    response.status(201).json({message:"create the product"})
}

const getProduct = (request,response)=>{
    response.status(200).json({message:"get the product"})
}

const updateProduct = (request,response)=>{
    response.status(201).json({message:"update the product"})
}

const deleteProduct = (request,response)=>{
    response.status(204).json({message:"delete the product"})
}

module.exports = {getAllProducts,createProduct,getProduct,updateProduct,deleteProduct}