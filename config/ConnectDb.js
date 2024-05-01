const mongoose = require('mongoose');

const ConnectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ChatBot"); 
        console.log("Db is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDb;