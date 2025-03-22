const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 8800
app.use(express.json());
app.use("/api/products",require("./routes/contactRoute"))
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT} port`)
})