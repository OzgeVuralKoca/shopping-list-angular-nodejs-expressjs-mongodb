const mongoose = require("mongoose");

const connection = async () => {
    try {
        const uri = "mongodb+srv://ozgevuralkoca:1@shoppingdb.oenprm2.mongodb.net/?retryWrites=true&w=majority";
        var result = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDb connection successful!")
    } catch (error) {
        console.log("MongoDb connection error! Error: " + error)
    }
}

module.exports = connection;