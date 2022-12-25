const mongoose = require("mongoose");
const uri="mongodb+srv://psk:4567@cluster0.i5izq16.mongodb.net/?retryWrites=true&w=majority"
async function dbConnect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to mongodb");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = dbConnect;
