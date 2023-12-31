const mongoose = require("mongoose");
const { MongoMemoryServer } = require('mongodb-memory-server');

async function connect() {
    const mongodb = await MongoMemoryServer.create();
    // const getUri = mongodb.getUri();
    const getUri = 'mongodb://localhost:27017';

    console.log(getUri);

    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(getUri);
    console.log("Database connected");
    return db;
}

module.exports = connect;