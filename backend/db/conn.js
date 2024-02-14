// backend\db\conn.js

const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.error(error);
    }
};

module.exports = { connect };
