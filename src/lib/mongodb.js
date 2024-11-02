import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error("Mongo uri not found in .env")
}

let isConnected = false;

const connectToDb = async () => {
    console.log(isConnected)
    if (isConnected) {
        return mongoose.connection
    }

    try {
        const db = await mongoose.connect(MONGO_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("Connected to MongoDB with Mongoose");
        return db;
    } catch (error) {
        throw new Error("Error while connecting DB: ", error);
    }
}

export default connectToDb;