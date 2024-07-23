import mongoose from "mongoose";
let isConnected = false; // track the mongo connection

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'promptify'
        });

        isConnected = true;
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log(error);
    }
};
