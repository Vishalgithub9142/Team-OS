require("dotenv").config()

const mongoose = require("mongoose")
const app = require("./app")

const PORT = process.env.PORT || 5000

async function startServer() {
    try{
        if(!process.env.MONGODB_URI){
            throw new Error("MONGODB_URI is not defined in the environment variables")
        }
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("Connected to MongoDB")

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }
    catch(err){
        console.error("Error starting server:", err)
        process.exit(1)
    }

}

startServer()