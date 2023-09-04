const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@database.tit23ir.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log('DataBase conectada')
    } catch(error){
            console.error("erro:", error)
        }
}

module.exports = connectToDatabase